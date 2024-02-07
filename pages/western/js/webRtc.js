'use strict';

$(document).ready(function () {
    const mediaStreamConstraints = {
        audio: { 'echoCancellation': true }
    };

    getUserMedia();

    var locationString = window.location.href;
    var directoryPath = locationString.substring(6, locationString.lastIndexOf("/frontend") + 1);

    var iceConfiguration = {
        iceServers: [
            {
                urls: "turn:194.87.214.9:3478",
                username: "testuser",
                credential: "test"
            },
            {
                urls: ["stun:stunserver.example.org",
                    "stun:sip1.lakedestiny.cordiaip.com",
                    "stun:stun1.voiceeclipse.net",
                    "stun:stun.callwithus.com",
                    "stun:stun.counterpath.net",
                    "stun:stun.internetcalls.com",
                    "stun:stun.noc.ams-ix.net",
                    "stun:stun.phoneserve.com",
                    "stun:stun.sipgate.net",
                    "stun:stun.sipgate.net:10000",
                    "stun:stun.stunprotocol.org",
                    "stun:stun.voip.aebc.com"]
            }
        ]
    };

    

    var peers = [];
    var iceCandidates = [];
    var iceCandidatesToSend = [];
    var nearbyPlayersList = [];
    var enabledAudioPlayersList = [];

    var currentUserId = 0;
    let localStream = null;


    function hangupAction(pc) {
        pc.close();
        pc = null;
    }

    function setLocalStreamEnabled(status) {
        localStream.getAudioTracks().forEach(track => {
            track.enabled = status;
        });
    }

    async function getUserMedia() {
        var mediaStream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
        localStream = mediaStream;
        localStream.getAudioTracks().forEach((track) => {
            track.enabled = true;
        });
        setTimeout(() => {
            localStream.getAudioTracks().forEach((track) => {
                track.enabled = false;
            });
        }, 1000);
    }

    async function createConnection(userId) {
        if (localStream == null && peers && peers.length == 0) {
            await getUserMedia();
        }

        var pc = new RTCPeerConnection(iceConfiguration);
        pc.addEventListener('icecandidate', handleConnection);
        pc.addEventListener('iceconnectionstatechange', handleConnectionChange);
        pc.ondatachannel = receiveChannelCallback;
        pc.addEventListener('addstream', gotRemoteMediaStream);

        var sendChannel = pc.createDataChannel('sendDataChannel');
        sendChannel.onopen = onSendChannelStateChange;
        sendChannel.onclose = onSendChannelStateChange;

        var existingItem = peers.find(x => x.userId == userId);
        if (existingItem != null) {
            hangupAction(existingItem.peerConnection);
            existingItem.peerConnection = pc;
            existingItem.sendChannel = sendChannel;
        } else {
            peers.push({
                userId: userId,
                peerConnection: pc,
                sendChannel: sendChannel
            });
        }

        return peers.find(x => x.userId == userId);
    }

    function gotLocalMediaStream(mediaStream) {
        localStream = mediaStream;
    }

    function handleConnection(event) {
        const peerConnection = event.target;

        const iceCandidate = event.candidate;
        if (iceCandidate) {
            var peer = peers.find(x => x.peerConnection == peerConnection);
            iceCandidatesToSend.push({ userId: peer.userId, iceCandidate: iceCandidate });
        }
    }

    function handleConnectionChange(event) {
        //
    }

    function gotRemoteMediaStream(event) {
        const peerConnection = event.target;
        var peer = peers.find(x => x.peerConnection == peerConnection);
        const mediaStream = event.stream;

        var id = `remoteAudio_${peer.userId}`;
        $('#RtcRemoteAudios').append(`<audio id="${id}" autoplay></audio>`);

        var remoteAudio = document.getElementById(id);
        peer.remoteStream = mediaStream;
        remoteAudio.srcObject = peer.remoteStream;
        remoteAudio.pause();
    }

    function receiveChannelCallback(event) {
        const peerConnection = event.target;
        var peer = peers.find(x => x.peerConnection == peerConnection);

        peer.receiveChannel = event.channel;
        peer.receiveChannel.onmessage = onReceiveMessageCallback;
        peer.receiveChannel.onopen = onReceiveChannelStateChange;
        peer.receiveChannel.onclose = onReceiveChannelStateChange;
    }

    function onSendChannelStateChange() {
        //
    }

    function onReceiveMessageCallback(event) {
        var data = JSON.parse(event.data);
        if (data.requestType && data.requestType == 'changeAudio') {
            var id = `remoteAudio_${data.userId}`;
            var remoteAudio = document.getElementById(id);
            if (data.enableAudio) {
                remoteAudio.volume = 1;
                remoteAudio.play();

            } else {
                remoteAudio.pause();
            }
            return;
        }
    }

    function onReceiveChannelStateChange() {

    }

    function createOffer(pc, callback) {
        pc.createOffer()
            .then((description) => {
                callback(description);
            }).catch(
                (error) => {
                    console.error('createOffer error', error);
                }
            );
    }

    function createAnswer(pc, callback) {
        pc.createAnswer()
            .then((description) => {
                callback(description);
            }).catch(
                (error) => {
                    console.error('createOffer error', error);
                }
            );
    }

    function setLocalDescription(pc, description) {
        pc.setLocalDescription(description)
            .then(() => {
                //OK!
            }).catch(
                (error) => {
                    console.error('setLocalDescription error', error);
                });
    }

    function setRemoteDescription(pc, description, callback) {
        pc.setRemoteDescription(description)
            .then(() => {
                //OK!
                callback();
            }).catch(
                (error) => {
                    console.error('setRemoteDescription error', error);
                });
    }

    async function getRemoteDescription(userId, jsonDesc) {
        var description = JSON.parse(jsonDesc);

        var peer = await createConnection(userId);

        setRemoteDescription(peer.peerConnection, description, () => {

            localStream.getTracks().forEach(function (track) {
                peer.peerConnection.addTrack(track, localStream);
            });

            createAnswer(peer.peerConnection, (answerDesc) => {
                setLocalDescription(peer.peerConnection, answerDesc);
                // send answer
                sendAnswer(userId, answerDesc);
            });
        });
    }


    function getRemoteAnswerDescription(userId, jsonDesc) {
        var description = JSON.parse(jsonDesc);
        var peer = peers.find(x => x.userId == userId);

        setRemoteDescription(peer.peerConnection, description, () => {

            var candidatesToSend = iceCandidatesToSend.filter(x => x.userId == peer.userId);
            for (var i = 0; i < candidatesToSend.length; i++) {
                sendIceCandidate(peer.userId, candidatesToSend[i].iceCandidate);
            }

            iceCandidatesToSend = iceCandidatesToSend.filter(x => x.userId != peer.userId);

            sendCandidateRequest(userId);
        });
    }

    function sendRemoteCandidate(userId) {
        var candidatesToSend = iceCandidatesToSend.filter(x => x.userId == userId);
        for (var i = 0; i < candidatesToSend.length; i++) {
            sendIceCandidate(userId, candidatesToSend[i].iceCandidate);
        }

        iceCandidatesToSend = iceCandidatesToSend.filter(x => x.userId != userId);
    }

    function getRemoteCandidate(userId, jsonDesc) {
        var candidate = JSON.parse(jsonDesc);

        var peer = peers.find(x => x.userId == userId);
        const newIceCandidate = new RTCIceCandidate(candidate);

        addIceCandidate(peer.peerConnection, newIceCandidate);
    }

    function addIceCandidate(pc, newIceCandidate) {
        pc.addIceCandidate(newIceCandidate)
            .then(() => {
                //OK!
            }).catch((error) => {
                console.error('addIceCandidate err!', newIceCandidate, error);
            });
    }


    async function call(userId) {
        var peer = await createConnection(userId);

        localStream.getTracks().forEach(function (track) {
            peer.peerConnection.addTrack(track, localStream);
        });

        createOffer(peer.peerConnection, (description) => {
            setLocalDescription(peer.peerConnection, description);
            // send description to others
            sendOffer(userId, description);
        });
    }

    //отключать \ включать audio для указанных пользователей
    function enableRemoteAudio() {

        enabledAudioPlayersList.forEach(x => {
            if (nearbyPlayersList.indexOf(x) == -1) {
                //disable
                var peer = peers.find(p => p.userId == x);
                //if (peer == null) {
                //    if (currentUserId > x) {
                //        call(x);
                //    }
                //    return;
                //}
                var data = JSON.stringify({ requestType: 'changeAudio', userId: currentUserId, enableAudio: false });
                if (peer && peer.sendChannel.readyState == 'open') {
                    peer.sendChannel.send(data);
                }

            }
        });

        var disabledChannels = [];
        nearbyPlayersList.forEach(x => {
            if (enabledAudioPlayersList.indexOf(x) == -1) {
                //enable
                var peer = peers.find(p => p.userId == x);
                //if (peer == null) {
                //    if (currentUserId > x) {
                //        call(x);
                //    }
                //    return;
                //}
                var data = JSON.stringify({ requestType: 'changeAudio', userId: currentUserId, enableAudio: true });
                if (peer && peer.sendChannel.readyState == 'open') {
                    peer.sendChannel.send(data);
                } else {
                    disabledChannels.push(x);
                }
            }
        });

        enabledAudioPlayersList = [...nearbyPlayersList.filter(x => disabledChannels.indexOf(x) == -1)];
    }

    window.addEventListener('message', function (event) {
        if (event.data.RtcCall) {
            call(event.data.RtcCall.UserId);
            return;
        }

        if (event.data.RtcOffer) {
            var desc = event.data.RtcOffer.Description;
            var fromUserId = event.data.RtcOffer.UserId;
            getRemoteDescription(fromUserId, desc);
            return;
        }

        if (event.data.RtcAnswer) {
            var desc = event.data.RtcAnswer.Description;
            var fromUserId = event.data.RtcAnswer.UserId;
            getRemoteAnswerDescription(fromUserId, desc);
            return;
        }

        if (event.data.RtcIceCandidate) {
            var desc = event.data.RtcIceCandidate.Candidate;
            var fromUserId = event.data.RtcIceCandidate.UserId;
            getRemoteCandidate(fromUserId, desc);
            return;
        }

        if (event.data.RtcIceCandidateRequest) {
            var fromUserId = event.data.RtcIceCandidateRequest;
            sendRemoteCandidate(fromUserId);
            return;
        }

        if (event.data.RtcEnableStream) {
            setLocalStreamEnabled(true);
            return;
        }

        if (event.data.RtcDisableStream) {
            setLocalStreamEnabled(false);
            return;
        }

        if (event.data.RtcNearbyPlayersList) {
            nearbyPlayersList = event.data.RtcNearbyPlayersList.List;
            currentUserId = event.data.RtcNearbyPlayersList.CurrentUserId;
            enableRemoteAudio();
            return;
        }
    });


    var sendOffer = (userId, description) => {
        var data = {
            UserId: userId,
            Description: JSON.stringify(description)
        };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'sendOffer',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendAnswer = (userId, description) => {
        var data = {
            UserId: userId,
            Description: JSON.stringify(description)
        };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'sendAnswer',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendIceCandidate = (userId, candidate) => {
        var data = {
            UserId: userId,
            Candidate: JSON.stringify(candidate)
        };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'sendCandidate',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendCandidateRequest = (userId) => {
        var data = {
            UserId: userId
        };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'sendCandidateRequest',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }
});