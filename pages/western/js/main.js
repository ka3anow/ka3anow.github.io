$(document).ready(function () {

    var location = window.location.href;
    var directoryPath = location.substring(6, location.lastIndexOf("/frontend") + 1);
    //document.oncontextmenu = function () { return false; };

    //
    var sendChangeRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'changebody',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendFaceFutureRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'changeface',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendCosmeticsRequest = (data) => {
         $.ajax({
             type: "POST",
             url: 'http://' + directoryPath + 'changecosmetics',
             data: JSON.stringify(data),
             contentType: 'application/json; charset=UTF-8'
         });
    }

    var sendClothRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'changecloth',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendHorseBuyRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'horsebuy',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendVehicleBuyRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'vehiclebuy',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var HorseBuyCloseRequest = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'horsebuyclose',
        });
    }

    var BuyVehicle = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'vehiclebuy',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var BuyVehicleCloseRequest = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'vehiclebuyclose',
        });
    }

    var sendCircleMenuRequest = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'circlemenu',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendBodyEditSave = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'bodyeditsave',
        });
    }
    var sendClothEditSave = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'clotheditsave',
        });
    }
    var sendHeadEditSave = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'headeditsave',
        });
    }

    var sendCosmeticsSave = () => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'cosmeticsave',
        });
    }


    var sendAdminCommand = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'admincommand',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendClothCommand = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'clothcommand',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var sendWalkstyleCommand = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'walkstylecommand',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    var givememoney = (data) => {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'givememoney',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    }

    //Body Edit Window
    
    $('#BodyEditSave').click(function (e) {
        sendBodyEditSave();
    });

    $('#BarverEditSave').click(function (e) {
        sendBodyEditSave();
    });

    
    $('#ClothEditSave').click(function (e) {
        sendClothEditSave();
    });

    $('#HeadEditSave').click(() => {
        sendHeadEditSave();
    });

    $('#CosmeticsSave').click(() => {
        sendCosmeticsSave();
    });


    $('#BodyEditWindow .rdr-input, #BarberEditWindow .rdr-input').change(function (e) {
        var btnId = e.target.id;
        var val = parseInt($(this).val());
        var max = parseInt($(this).attr('max'));
        if (val < 0) {
            $(this).val(max - 1);
            val = max - 1;
        }
        if (val >= max){
            $(this).val(0);
            val = 0;
        }

        if (btnId == 'BodySizeIndex') {
            sendChangeRequest({ BodySizeIndex: val });
            return;
        }
        if (btnId == 'WaistTypeIndex') {
            sendChangeRequest({ WaistTypeIndex: val });
            return;
        }
        var data = {};
        data[parseInt(btnId, 16)] = val;
        var requestData = { CustomizationParameters: data }
        sendChangeRequest(requestData);
    });

    $('#BodyEditWindow button, #BarberEditWindow button').click(function(){
        if ($(this).hasClass('btn-arrow-left')) {
            var InputEl = $(this).siblings("input");
            InputEl.val(parseInt(InputEl.val()) - 1);
            InputEl.trigger('change');
        }
        if ($(this).hasClass('btn-arrow-right')) {
            var InputEl = $(this).siblings("input");
            InputEl.val(parseInt(InputEl.val()) + 1);
            InputEl.trigger('change');
        } 
    });

    $('#ClothEditWindow button').click(function(){
        if ($(this).hasClass('btn-arrow-left')) {
            var InputEl = $(this).siblings("input");
            InputEl.val(parseInt(InputEl.val()) - 1);
            InputEl.trigger('change');
        }
        if ($(this).hasClass('btn-arrow-right')) {
            var InputEl = $(this).siblings("input");
            InputEl.val(parseInt(InputEl.val()) + 1);
            InputEl.trigger('change');
        } 
    });

    $('#ClothEditWindow .rdr-input').change(function (e) {
        var btnId = e.target.id;
        var val = parseInt($(this).val());
        var max = parseInt($(this).attr('max'));
        if (val < 0) {
            $(this).val(max - 1);
        }
        if (val >= max){
            $(this).val(0);
        }
        var data = {};
        data[parseInt(btnId, 16)] = $(this).val();
        var requestData = { CustomizationParameters: data }
        sendClothRequest(requestData);
    });

    //Shop Edit Window

    $(".closewindow").click(() => {
        sendClose();
    });

    function sendClose() {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'close'
        });
    }

    $(document).keydown(function(e) {
        if( e.keyCode === 27 ) {
            sendClose();
            CloseAllModal();
            toggleTransferMenuOff();
            $('#ItemHoverWindow').css('display','none');
        }
    });

    //Shop Buy 

    function BuyShop(data) {
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'buyshop',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    };

    // Event Listener

    window.addEventListener('message', function (event) {

        // ignore rtc events
        if (event.data.RtcCall || event.data.RtcOffer || event.data.RtcAnswer || event.data.RtcIceCandidate ||
            event.data.RtcIceCandidateRequest || event.data.RtcEnableStream || event.data.RtcDisableStream || event.data.RtcNearbyPlayersList) {
            return;
        }

        if (event.data.DebugText) {
            var debugConsole = $('#DebugArea');
            $('#DebugArea').append(event.data.DebugText + "\r\n");
            if (debugConsole.length)
                debugConsole.scrollTop(debugConsole[0].scrollHeight - debugConsole.height());
            return;
        }

        if (event.data.Items) {
            var items = event.data.Items;
            InventoryLoad(items);
            return;
        }

        if (event.data.ScenariosLoad) {
            var scenarios = event.data.Scenarios;
            ScenarioListLoad(scenarios);
            return;
        }

        if (event.data.UpdateClothSetList) {
            var list = event.data.ClothSetList;
            generateClothList(list);
            return;
        }

        if (event.data.ShowPopup) {
            var data = event.data.ShowPopup;
            showMessage(data);
            return;
        }

        if (event.data.Horses) {
            var horses = event.data.Horses;
            HorseStableLoad(horses);
            return;
        }

        if (event.data.Vehicles) {
            var vehicles = event.data.Vehicles;
            VehicleStableLoad(vehicles);
            return;
        }


        $("#BodyEditWindow").css('display', event.data.ShowBodyEditMenu ? "block" : "none");
        $("#BarberEditWindow").css('display', event.data.ShowBarberEditMenu ? "block" : "none");
        $("#HeadEditWindow").css('display', event.data.ShowHeadEditMenu ? "block" : "none");
        $("#СosmeticsEditWindow").css('display', event.data.ShowCosmeticsEditMenu ? "block" : "none");
        $("#InterfaceWindow").css('display', event.data.ShowPlayerInterfaceWindow ? "block" : "none");
        $("#ClothEditWindow").css('display', event.data.ShowClothEditMenu ? "block" : "none");
        //$("#ShopBook").css('display', event.data.ShowHorseBuyMenu || event.data.ShowWeaponShopMenu || event.data.ShowItemShopMenu || event.data.ShowFoodShopMenu || event.data.ShowVehiclesShop ? "flex" : "none");
        $("#CircleAnimWindow").css('display', event.data.ShowAnimWindowMenu ? "block" : "none");
        $("#PlayerHud").css('display', event.data.ShowHudMenu ? "block" : "none");
        $('#HorseStableWindow').css('display', event.data.ShowStableWindow ? "block" : "none");
        $('#VehicleStableWindow').css('display', event.data.ShowVehicleWindow ? "block" : "none");
        $('#RegistrationWindow').css('display', event.data.ShowRegistrationWindow ? "flex" : "none");
        $('#adminMenu').css('display', event.data.ShowAdminWindow ? "block" : "none");
        //cam text
        $("#camHelpText").css('display', event.data.ShowBodyEditMenu || event.data.ShowHeadEditMenu || event.data.ShowCosmeticsEditMenu || event.data.ShowClothEditMenu ? "block" : "none");
        

        if (event.data.IsMale) {
            $('#PlayerMale').prop("checked", true);
        } else {
            $('#PlayerFemale').prop("checked", true);
        }

        
        var data = event.data;
        if (data.ShowBodyEditMenu || data.ShowClothEditMenu) {
            for (var prop in data.CustomizationParameters) {
                var value = data.CustomizationParameters[prop];
                $(`#0x${parseInt(+prop.toString()).toString(16).toUpperCase()}`).val(value);
            }

            $('#BodySizeIndex').data("max", data.BodySizeMaleCount);
            $('#BodySizeIndex').val(data.BodySizeIndex);
            $('#WaistTypeIndex').data("max", data.WaistTypeMaleCount);
            $('#WaistTypeIndex').val(data.WaistTypesIndex);
            
            for (var prop in data) {
                if (prop.includes("Count")) {
                    if (data.IsMale) {
                        if (prop.includes('Male')) {
                            var replaceSex = prop.replace("Male", '');
                            $(`input[data-max=${replaceSex}]`).attr('max', data[prop]);
                        }
                    } else {
                        if (prop.includes('Female')) {
                            var replaceSex = prop.replace("Female", '');
                            $(`input[data-max=${replaceSex}]`).attr('max', data[prop]);
                        }
                    }
                }
            }
        }

        if (data.ShowHeadEditMenu) {
            for (var prop in data.StringIdFaceFeatures) {
                $(`#${prop}`).val(data.StringIdFaceFeatures[prop]);
                $(`#${prop}Val`).text(data.StringIdFaceFeatures[prop]);
            }
        }

        if (event.data.ShopHorses) {
            var horses = event.data.ShopHorses;
            HorseShop(horses);
        }

        if (event.data.ShowWeaponShopMenu) {
            var guns = event.data.ShopGuns;
            GunShop(guns);
        }
        if (event.data.ShowFoodShopMenu) {
            var food = event.data.ShopFoods;
            FoodShop(food);
        }
        if (event.data.ShowItemShopMenu) {
            var items = event.data.ShopItems;
            ItemShop(items);
        }
        if (event.data.ShowPropShopMenu) {
            var props = event.data.ShopProps;
            PropShop(props);
        }
        if (event.data.ShowVehiclesShop) {
            var vehicles = event.data.ShopVehicles;
            VehiclesShop(vehicles);
        }


        if (event.data.ShowProgressBar) {
            var data = event.data.ShowProgressBar;
            showProgress(data);
        }
        
        if (event.data.OnlinePlayers) {
            var data = event.data.OnlinePlayers
            var tplist = event.data.TeleportPlaces
            adminLoad(data, tplist);
        }

        if (event.data.Nuiclose) {
            Nuiclose();
        }

        if (event.data.LoadPassport) {
            var data = (event.data);
            LoadPassport(data);
        }

        if (event.data.ShowStableWindow) {
            var stablename = (event.data.stablename);
            $('#HorseStableMount').data('stablename', stablename)
        }

        if (event.data.ShowVehicleWindow) {
            var stablename = (event.data.stablename);
            $('#VehicleStableMount').data('stablename', stablename)
        }
    });

    // Input Face Edit Window

    $("#HeadEditWindow input[type = range]").on("input change", function () {
        $('#' + $(this).attr('id') + 'Val').text($(this).val());
        var id = $(this).attr('id');
        var value = $(this).val();
        var requestData = {'Id': id, "Value": value};
        sendFaceFutureRequest(requestData);
    });

    $("#pedscale").on("input change", function () {
        $('#' + $(this).attr('id') + 'Val').text($(this).val());
        var id = $(this).attr('id');
        var value = $(this).val();
        var requestData = { "Scale": value};
        sendChangeRequest(requestData);
    });

    $('input[type = radio][name=MaleFemaleOptions]').change(function () {
        if ($(this).val() == 'PlayerMale') {
            sendChangeRequest({ ChangeSex: true });
        } else {
            sendChangeRequest({ ChangeSex: false });
        }
    });

    // Input Cosmetic Edit Window
    
    $("#СosmeticsEditWindow input[type = range]").on("input change", function () {
        $('#' + $(this).attr('id') + 'Val').text($(this).val());
        var id = $(this).attr('id');
        var name = id.split('_');
        var parentId = name[0].toString();
        CosmeticEditModel(parentId);
    });

    $('body').on( 'click', '[data-type="btnright"]', function() {
        var target = $(this).data('target')
        var value = parseInt($(`#${target}`).val());
        var maxvalue = $(`#${target}`).data('max');
        value++;
        if (value > maxvalue) {
            value = 0;
        }
        $(`#${target}`).val(value);
        var name = target.split('_');
        var parentId = name[0].toString();
        CosmeticEditModel(parentId);
    });

    $('body').on( 'click', '[data-type="btnleft"]', function() {
        var target = $(this).data('target')
        var value = parseInt($(`#${target}`).val());
        value--;
        var maxvalue = $(`#${target}`).data('max');
        var minvalue = $(`#${target}`).data('min');
        if (value <minvalue) {
            value = maxvalue;
        }
        $(`#${target}`).val(value);
        var name = target.split('_');
        var parentId = name[0].toString();
        CosmeticEditModel(parentId);
    });

    $('body').on( 'change', '[data-type="input"]', function() {
        var value = parseInt($(this).val());
        var maxvalue = $(this).data('max');
        var minvalue = $(this).data('min');
        if (value > maxvalue) {
            value = maxvalue;
        }
        if (value < minvalue) {
            value = minvalue;
        }
        $(this).val(value);
        target = $(this).attr('id');
        var name = target.split('_');
        var parentId = name[0].toString();
        CosmeticEditModel(parentId);
    });

    function CosmeticEditModel(parentId) {
        var name = parentId;
        var opacity = $(`#${name}`).val();
        var textureId = $(`#${name}_overlay`).val();
        var paletteId = $(`#${name}_palette`).val();
        var paletteColorPrimary = $(`#${name}_primary`).val();
        var paletteColorSecondary = $(`#${name}_secondary`).val();
        var paletteColorTertiary = $(`#${name}_tertiary`).val();
        var textureColorType = 0;
        if ((paletteColorPrimary == 0) & (paletteColorSecondary==0) & (paletteColorTertiary==0)) {textureColorType = 1;};
        if ((paletteColorPrimary == 254) & (paletteColorSecondary==254) & (paletteColorTertiary==254)) {textureColorType = 2;};
        var modelVar = $(`#${name}_var`).val();
        if (!textureId) {textureId = 0};
        if (!modelVar) {modelVar = 0};
        var requestData = {
            'Name': name,
            'TextureId': parseInt(textureId),
            'TextureColorType': textureColorType,
            'PaletteId': parseInt(paletteId),
            'PaletteColorPrimary': parseInt(paletteColorPrimary),
            'PaletteColorSecondary': parseInt(paletteColorSecondary),
            'PaletteColorTertiary': parseInt(paletteColorTertiary),
            'Var': parseInt(modelVar),
            'Opacity': parseFloat(opacity)
        };
        sendCosmeticsRequest(requestData);
    };

    // Inventory

    function InventoryLoad(items) {
        $('#PlayerInterface').empty();
        for (var i in items) {
            var item = items[i];
            $('#PlayerInterface').append(`
                <li class="interface_item item_rc ${item.Equiped ? "equiped" : ""} filter_${item.Type}" 
                id="${item.ItemId}"
                data-description="${item.Description ? item.Description : ''}"
                data-count="${item.Count}"
                data-itemname="${item.Name}"
                data-itemtype="${item.Type}"
                data-usetext="${item.UseText}"
                >
                <img src="${item.ImageHref}" class="img-responsive">
                <span>${item.Count}</span>
            </li>`);
            
        }
        $('#PlayerInterface').isotope('destroy');
        $grid = $('#PlayerInterface').isotope({
            filter: filterValue,
        });
        rightClickToggle();
        setHoverOnItems();
    }

    function generateClothList(list) {
        $('#cloth_list').empty();
        for (var i in list) {
            var item = list[i];
            $('#cloth_list').append(`<div class="flexbox">
            <button class="btn btn-interface btn-rdr2 btn-block" data-type="cloth_menu" data-command="cloth_puton" data-name="${item}">${item}</button>
            <button class="CloseInterface delete_cloth" data-type="cloth_menu" data-command="cloth_delete" data-name="${item}">X</button>
            </div>`);
        }
    }

    // Scenarios

    function ScenarioListLoad(list) {
        var group = groupBy(list,"Group");
        var elem = $('#appendScenarios');
        elem.empty();
        for (var i in group) {
            var fullName = GetAnimationGroup(group[i][0].Group);
            elem.append(`<h4>${fullName}</h4>`);
            var item = group[i];
            for (var j in item) {
                elem.append(`<button class="btn btn-rdr2" data-animation="${item[j].Animation}" data-type="play_scenario">${item[j].Name}</button>`);
            }
        }
    }

    $('body').on( 'click', '[data-type="play_scenario"]', function() {
        var id = $(this).data('animation');
        var requestData = { "Id": id };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'playanimation',
            data: JSON.stringify(requestData),
            contentType: 'application/json; charset=UTF-8'
        });
    });

    // Horse buy window

    function setOnHorseStable() {
        $('#HorseStableWindow .btn-interface').unbind('click');
        $('#HorseStableWindow .btn-interface').click(function () {
            $('#HorseStableWindow .btn-interface').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            var id = $(this).attr('id');
            
            $('#HorseStableMount').data('horse', id);
        });
    }

    function setOnVehicleStable() {
        $('#VehicleStableWindow .btn-interface').unbind('click');
        $('#VehicleStableWindow .btn-interface').click(function () {
            $('#VehicleStableWindow .btn-interface').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            var id = $(this).attr('id');
            
            $('#VehicleStableMount').data('vehicle', id);
        });
    }

    $('#HorseBuyWindow #HorseBuySave').click(function(){
        if (id != 'noHorse') {
            var id = $(this).data('horse');
            var name = $(this).text();
            var requestData = { "Id": id, "Buy": true, "HorseName": name };
			sendHorseBuyRequest(requestData);
		}
    });

    function HorseStableLoad(horses) {
        $('#HorseStableWindowList').empty();
        for (var i in horses) {
            var item = horses[i];
            $('#HorseStableWindowList').append(`<div class="flexbox">
            <button class="btn btn-interface btn-rdr2 btn-block stable_button" data-price="${item.Price}" id="${item.Hash}">${item.Name}</button><button class="CloseInterface delete_cloth" data-type="horse_menu" data-hash="${item.Hash}" data-command="horse_delete" data-name="${item.Name}">X</button></div>`);
        }
        setOnHorseStable();
    };

    function VehicleStableLoad(vehicles) {
        $('#VehicleStableWindowList').empty();
        for (var i in vehicles) {
            var item = vehicles[i];
            $('#VehicleStableWindowList').append(`<div class="flexbox">
            <button class="btn btn-interface btn-rdr2 btn-block stable_button" data-price="${item.Price}" id="${item.Hash}">${item.Name}</button><button class="CloseInterface delete_cloth" data-type="horse_menu" data-hash="${item.Hash}" data-command="vehicle_delete" data-name="${item.Name}">X</button></div>`);
        }
        setOnVehicleStable();   
    }

    $('body').on( 'click', '[data-type="horse_menu"]', function() {
        var hash = $(this).data('hash');
        var command = $(this).data('command');
        if (command == 'horse_delete') {
            var requestData = { "hash": hash };
            $.ajax({
                type: "POST",
                url: 'http://' + directoryPath + 'deletehorse',
                data: JSON.stringify(requestData),
                contentType: 'application/json; charset=UTF-8'
            });
        }
        if (command == 'vehicle_delete') {
            var requestData = { "hash": hash };
            $.ajax({
                type: "POST",
                url: 'http://' + directoryPath + 'deletevehicle',
                data: JSON.stringify(requestData),
                contentType: 'application/json; charset=UTF-8'
            });
            console.log(requestData)
        }
    });

    //Round Menu 
	
	$('button[data-toggle=roundmenu]').click(function () {
		$('button[data-toggle=roundmenu]').each(function(){
			$(this).removeClass('active');
			$($(this).data('target')).fadeOut(300);
        });
		var TargetObject = $(this).data('target');
		if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
			$($(TargetObject)).fadeIn(300);
        }
    });

	$('.circle_close').click(function(){
        $('#CircleAnimWindow').fadeOut(300);
        $('button[data-toggle=roundmenu]').each(function(){
			$(this).removeClass('active');
			$($(this).data('target')).fadeOut(300);
        });
    });

    $('button[data-toggle=roundbutton]').click(function () {
        var id = $(this).attr('id');
        var requestData = { "Id": id };
        sendCircleMenuRequest(requestData);
    });

    //Horses

    $('#HorseBuyClose').click(function(){
        HorseBuyCloseRequest();
    })

    $('#HorseStableWindow .btn-interface').click(function(){
        $('#HorseStableWindow .btn-interface').each(function(){
			$(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    $('#HorseStableMount').click(function(){
        var data = { HorseHash: $(this).data('horse'), Stablename: $(this).data('stablename') };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'horsestable',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    });

    $('#VehicleStableMount').click(function(){
        var data = { VehicleHash: $(this).data('vehicle'), Stablename: $(this).data('stablename') };
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'vehiclestable',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        });
    });

    function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

    // Shop

      var testData = [
        {
            "GroupName": 0,
            Name: "Американский пейнтхорс",
            Price: 200,
            ImageHref: "images/ui/horses/Americanpaint1.jpg",
            Description: "Описание лошадки"
        },
        {
            "GroupName": 0,
            Name: "Американский пейнтхорс",
            Price: 200,
            ImageHref: "images/ui/horses/Americanpaint2.jpg",
            Description: "Описание лошадки"
        },
        {
            "GroupName": 1,
            Name: "Американский рысак",
            Price: 200,
            ImageHref: "images/ui/horses/Americanstandardbred1.jpg",
            Description: "Описание лошадки"
        }
      ]

      ShopLoad(testData, 'HorseShop', 'Магазин лошадей');

    function ShopLoad(BookData, BookType, Heading) {
        var BookId = $('#flipbook');
        BookId.detach();
        $('#ShopBook .innerBook ').append(`<div id="flipbook" class="shop_book"></div>`);
        BookId = $('#flipbook');
        var BookDesign = GetBookDesign(BookType);
        BookId.append(`
            <div class="hard"><div class="outerpage firstpage" style="background-image: url(${BookDesign.CoverBg});"><div class="innerpage cover_page cover_${BookDesign.Type}">
            <div class="cover_image center"><img class="img-responsive book_image" src="${BookDesign.CoverImage}"></div><h1 class="text-center">${BookDesign.CoverName}</h1>
            <h2 class="text-center">${BookDesign.CoverTitle}</h2></div></div></div>`);
        if (BookDesign.SecondImage) {BookDesign.SecondImage = `<img class="img-responsive" src="${BookDesign.SecondImage}">`} else {BookDesign.SecondImage = ``}
        BookId.append(`<div class="hard"><div class="outerpage left"><div class="innerpage">${BookDesign.SecondImage}</div></div></div>`);
        
        switch (BookType) {
            case 'HorseShop': 
                var ListData = "";
                var groups = groupBy(BookData,"GroupName");
                var liCount = 0;
                for (var i in groups) {
                    var item = groups[i];
                    var fullName = GetHorseGroup(item[0].GroupName);
                    ListData = ListData + `<li data-page="${parseInt(liCount)+ parseInt(4)}"><span class="page_name">${fullName.GroupName}</span><span class="page_numb">${parseInt(liCount)+ parseInt(4)}</span></li>`;
                    liCount++;
                }
                BookId.append(`<div><div class="outerpage right"><div class="innerpage"><h3>${Heading}</h3><ul class="contents_list">${ListData}</ul></div></div></div>`);
                var Count = 0;
                for (var i in groups) {
                    var item = groups[i];
  
                    PriceArr = item[0].Price.toFixed(2).split(".");
                    var ItemDollar = PriceArr[0];
                    var ItemCent = PriceArr[1];
                    var pageName = GetHorseGroup(item[0].GroupName);
                    var mainImageHref = pageName.MainImageHref;
                    
                    if (BookType == "HorseShop") {
                        var item = groups[i];
                        var imageBlock = `<div id="Slider${item[0].GroupName}" class="carousel_wrapper">`
                        imageBlock = imageBlock + `<div class="carousel_item" data-numb="0"><img class="img-responsive" src="${mainImageHref}"></div>`;
                        for (var j in item) {
                            imageBlock = imageBlock + `<div class="carousel_item" style="display:none" data-numb="${parseInt(j)+parseInt(1)}"><img class="img-responsive" src="${item[j].ImageHref}" alt="${item[j].Name}"></div>`;
                        }
                        imageBlock = imageBlock + `</div>`
                        var colorsChoose = ``;
                        for (var k in item) {
                            var skinColor = item[k].ImageHref.split(".jpg");
                            skinColor = skinColor[0] + "Skin.jpg";
                            colorsChoose = colorsChoose + `<button class="book_variaton" data-parent="${i}" data-name="${item[k].Name}" data-price="${item[k].Price}" data-hash="${item[k].Hash}" data-href="#Slider${item[0].GroupName}" data-page="${parseInt(k)+parseInt(1)}" style="background-image: url(${skinColor})"></button>`;
                        }
                    } else {
                        imageBlock = `<img class="img-responsive" src="${item[0].ImageHref}"></img>`
                        var colorsChoose = ``;
                    }
                    if (i & 1) {var ItemSide = 'right'} else {var ItemSide = 'left'};
                    BookId.append(`<div>
                        <div class="outerpage ${ItemSide}" id="BookPage${i}">
                            <div class="innerpage">
                                <div class="pagenumb">- ${parseInt(Count)+ parseInt(4)} -</div>
                                <div class="border">
                                    ${imageBlock}
                                </div>
                                <h3 class="pageh3">${pageName.GroupName}</h3>
                                <div class="description"><p>${item[0].Description}</p></div>
                            </div>
                            <div class="book_choose">
                                ${colorsChoose}
                            </div>
                            <div class="book_priceblock">
                                <div class="col-md-7 book_buttons">
                                    <button class="btn btn-block btn-book backToTable">В оглавление</button>
                                    <button class="btn btn-block btn-book btn-danger buybookshop" data-type="${BookType}" data-name="${item[0].Name}" data-hash="${item[0].Hash}">Купить</button>
                                </div>
                                <div class="col-md-5 text-right">
                                    <div class="book_price">
                                        <span class="book_dollaricon">$</span>
                                        <span class="book_pricedollar" data-baseprice="${ItemDollar}">${ItemDollar}</span>
                                        <span class="book_cents">${ItemCent}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="text-center footer_inner">
                                    <img src="images/ui/book/logo-footer.png">
                                </div>
                            </div>
                        </div>
                    </div>`);
                    Count++;
                }
                break;
            case 'VehiclesShop':
                var ListData = "";
                var liCount = 0;
                for (var i in BookData) {
                    var item = BookData[i];
                    ListData = ListData + `<li data-page="${parseInt(liCount)+ parseInt(4)}"><span class="page_name">${item.Name}</span><span class="page_numb">${parseInt(liCount)+ parseInt(4)}</span></li>`;
                    liCount++;
                }
                BookId.append(`<div><div class="outerpage right"><div class="innerpage"><h3>${Heading}</h3><ul class="contents_list">${ListData}</ul></div></div></div>`);
                var Count = 0;
                for (var i in BookData) {
                    var item = BookData[i]
                    PriceArr = item.Price.toFixed(2).split(".");
                    var ItemDollar = PriceArr[0];
                    var ItemCent = PriceArr[1];
                    if (i & 1) {var ItemSide = 'right'} else {var ItemSide = 'left'};
                    BookId.append(`<div>
                        <div class="outerpage ${ItemSide}" id="BookPage${i}">
                            <div class="innerpage">
                                <div class="pagenumb">- ${parseInt(Count)+ parseInt(4)} -</div>
                                <div class="border">
                                    <img class="img-responsive" src="${item.ImageHref}" alt="${item.Name}">
                                </div>
                                <h3 class="pageh3">${item.Name}</h3>
                                <div class="description"><p>${item.Description}</p></div>
                            </div>
                            <div class="book_priceblock">
                                <div class="col-md-7 book_buttons">
                                    <button class="btn btn-block btn-book backToTable">В оглавление</button>
                                    <button class="btn btn-block btn-book btn-danger buybookshop" data-type="${BookType}" data-name="${item.Name}" data-hash="${item.Hash}">Купить</button>
                                </div>
                                <div class="col-md-5 text-right">
                                    <div class="book_price">
                                        <span class="book_dollaricon">$</span>
                                        <span class="book_pricedollar" data-baseprice="${ItemDollar}">${ItemDollar}</span>
                                        <span class="book_cents">${ItemCent}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="text-center footer_inner">
                                    <img src="images/ui/book/logo-footer.png">
                                </div>
                            </div>
                        </div>
                    </div>`);
                    Count++;
                }
                break;
            default:
                var ListData = "";
                var liCount = 0;
                for (var i in BookData) {
                    var item = BookData[i];
                    ListData = ListData + `<li data-page="${parseInt(liCount)+ parseInt(4)}"><span class="page_name">${item.Name}</span><span class="page_numb">${parseInt(liCount)+ parseInt(4)}</span></li>`;
                    liCount++;
                }
                BookId.append(`<div><div class="outerpage right"><div class="innerpage"><h3>${Heading}</h3><ul class="contents_list">${ListData}</ul></div></div></div>`);
                var Count = 0;
                for (var i in BookData) {
                    var item = BookData[i]
                    PriceArr = item.Price.toFixed(2).split(".");
                    var ItemDollar = PriceArr[0];
                    var ItemCent = PriceArr[1];
                    if (i & 1) {var ItemSide = 'right'} else {var ItemSide = 'left'};
                    BookId.append(`<div>
                        <div class="outerpage ${ItemSide}" id="BookPage${i}">
                            <div class="innerpage">
                                <div class="pagenumb">- ${parseInt(Count)+ parseInt(4)} -</div>
                                <div class="border">
                                    <img class="img-responsive" src="${item.ShopHref}" alt="${item.Name}">
                                </div>
                                <h3 class="pageh3">${item.Name}</h3>
                                <div class="description"><p>${item.Description}</p></div>
                            </div>
                            <div class="book_priceblock">
                                <div class="col-md-7 book_buttons">
                                    <button class="btn btn-block btn-book backToTable">В оглавление</button>
                                    <button class="btn btn-block btn-book btn-danger buybookshop" data-type="${BookType}" data-name="${item.Name}" data-hash="${item.ItemId}">Купить</button>
                                </div>
                                <div class="col-md-5 text-right">
                                    <div class="book_price">
                                        <span class="book_dollaricon">$</span>
                                        <span class="book_pricedollar" data-baseprice="${ItemDollar}">${ItemDollar}</span>
                                        <span class="book_cents">${ItemCent}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="text-center footer_inner">
                                    <img src="images/ui/book/logo-footer.png">
                                </div>
                            </div>
                        </div>
                    </div>`);
                    Count++;
                }
                break;
        }
        if (Count & 1) {BookId.append(`<div><div class="outerpage right"><div class="innerpage"><h3>Пустая страница</h3></div> </div></div>`)};
        BookId.append(`<div><div class="outerpage left"><div class="innerpage"><h3>Пустая страница</h3></div> </div></div>`)
        if (BookDesign.PenultImage) {BookDesign.PenultImage = `<img class="img-responsive" src="${BookDesign.PenultImage}">`} else {BookDesign.PenultImage = ``}
        BookId.append(`<div class="hard"><div class="outerpage right"><div class="innerpage">${BookDesign.PenultImage}</div></div></div>`);
        BookId.append(`<div class="hard"><div class="outerpage lastpage" style="background-image: url(${BookDesign.CoverBgLast});"><div class="innerpage"></div></div></div>`);
        BookId.turn({
            width: 1200,
            height: 800
        });
    }

    $(document).on('click', '.book_choose .book_variaton', function(){ 
        var href = $(this).data('href');
        var page = $(this).data('page');
        $(`${href} .carousel_item`).each(function(){
            if ($(this).data('numb') == page) {
                $(this).fadeIn(500);
            } else {
                $(this).fadeOut(0);
            }
        })
        var hash = $(this).data('hash');
        var price = $(this).data('price');
        var name = $(this).data('name');
        var parent = $(this).data('parent');
        $(`#BookPage${parent} .book_variaton`).each(function(){
            $(this).removeClass('active'); 
        });
        $(this).addClass('active');
        $(`#BookPage${parent} .buybookshop`).data(`hash`, hash);
        $(`#BookPage${parent} .pageh3`).text(name);
        $(`#BookPage${parent} .book_pricedollar`).text(price);
    });

    $(document).on('click', '.contents_list li', function(){ 
        var page = $(this).data('page');
        $('#flipbook').turn("page", page);
    });

    $(document).on('click', '.backToTable', function(){ 
        $('#flipbook').turn("page", 3);
    });

    $(document).on('click', '.buybookshop', function(){ 
        var id = $(this).data('hash');
        var name = $(this).data('name');
        var booktype = $(this).data('type');

        switch(booktype) {
            case 'HorseShop':
                var requestData = { "Id": id, "Buy": true, "HorseName": name };
                sendHorseBuyRequest(requestData);
                HorseBuyCloseRequest();
                break;
            case 'VehiclesShop':
                var requestData = { "Id": id, "Buy": true, "HorseName": name };
                BuyVehicle(requestData);
                BuyVehicleCloseRequest();
                break;
            default:
                var requestData = { "Id": id, "Count": 1 };
                BuyShop(requestData);
                break;
        }
    });

    $(document).on('click', '.closebook', function(){ 
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'close'
        });
    });

    /* Shop controllers */

    function HorseShop(data) {
        var data = data;
        var type = 'HorseShop';
        var heading = `Список лошадей`;
        ShopLoad(data, type, heading);
    }
    function Registration() {
        var BookData
        var BookType = 'Registration';
        ShopLoad(BookData, BookType);
    }
    function GunShop(data) {
        var data = data;
        var type = 'GunShop';
        var heading = 'Оружие';
        ShopLoad(data, type, heading);
    };
    function FoodShop(data) {
        var data = data;
        var type = 'FoodShop';
        var heading = 'Продукты питания';
        ShopLoad(data, type, heading);
    };
    function ItemShop(data) {
        var data = data;
        var type = 'ItemShop';
        var heading = 'Магазин предметов';
        ShopLoad(data, type, heading);
    };

    function PropShop(data) {
        var data = data;
        var type = 'PropShop';
        var heading = 'Магазин пропов';
        ShopLoad(data, type, heading);
    };

    function VehiclesShop(data) {
        var data = data;
        var type = 'VehiclesShop';
        var heading = 'Магазин повозок';
        ShopLoad(data, type, heading);
    };



    /* Shop */

    var ItemPrice = 0;

    $('.shop .btn-shop').click(function (){
        ItemPrice = $(this).data('price');
        $('.shop .btn-shop').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('#ShopCount').val("1");
        SetPrice(ItemPrice);
    });
    $('.shop #ShopCountDelta_left').click(function () {
        var ItemCount = parseInt($('#ShopCount').val());
        ItemCount = parseInt(ItemCount) - 1;
        if (ItemCount < 1) {
            ItemCount = 1;
        }
        $('#ShopCount').val(ItemCount);
        SetPrice(ItemPrice);
    });
    $('.shop #ShopCountDelta_right').click(function () {
        var ItemCount = $('#ShopCount').val();
        ItemCount = parseInt(ItemCount) + 1;
        $('#ShopCount').val(ItemCount);
        SetPrice(ItemPrice);
    });
    $(".shop #ShopCount").change(function (){
        var ItemCount = $('#ShopCount').val();
        $('#ShopCount').val(ItemCount);
        SetPrice(ItemPrice);
    });

    function SetPrice(price) {
        var PriceArr = parseFloat(price) * $('#ShopCount').val();
        PriceArr = PriceArr.toFixed(2).split(".");
        var ItemDollar = PriceArr[0];
        var ItemCent = PriceArr[1];

        $('#ShopPrice').text(ItemDollar);
        $('#ShopPriceCents').text(ItemCent);
    }

    // Registration window

    $(document).on('click', '#passport_save', function(){
        var passport = {};
        passport.age = $('#passport_age').val();
        passport.weight = $('#passport_weight').val();
        passport.name = $('#passport_name').val();
        passport.surname = $('#passport_surname').val();
        passport.signature = $('#passport_signature').val();
        passport.id = "after reload";
        if ((passport.age) && (passport.weight) && (passport.name) && (passport.surname) && (passport.signature)) {
            $.ajax({
                type: "POST",
                url: 'http://' + directoryPath + 'passport',
                data: JSON.stringify(passport),
                contentType: 'application/json; charset=UTF-8'
            });
        } else {
            var data = {};
            data.message = "Заполните все поля пасспорта.";
            data.duration = 3000;
            showMessage(data);
        }
    });


    function Nuiclose2() {
        CloseAllModal();
        $(":ui-dialog").each(function(){
            $(this).dialog('close');
        })
    }

    function LoadPassport(data) {
        $('#loadpassport_name').text(data.name);
        $('#loadpassport_surname').text(data.surname);
        $('#loadpassport_age').text(data.age);
        $('#loadpassport_id').text(data.id);

    }

    //Dragable Modal Ui
	//v.1.0
	
	$('.CloseInterface').click(function(){
		$($(this).data('target')).css('display','none');
		var Objectm = $(this).data('target');
		$('button[data-toggle=submenu]').each(function(){
			if ($(this).data('target') == Objectm) {
				$(this).removeClass('active');
			}
        });
    });
    $('.closewindow').click(function(){
        CloseAllModal();
        ModalUiZIndexCount = 1;
    });

    $('button[data-toggle=submenu]').click(function () {
        var TargetObject = $(this).data('target');
        var ThisHeight = $(this).offset().top;
        var ThisWidth = $('#InterfaceWindow').width();
        $($(TargetObject)).css('display', 'block');
        $($(TargetObject)).css('top', $(this).offset().top - 3);
        $($(TargetObject)).css('left', ThisWidth + 75);
        $($(TargetObject)).css("z-index", ModalUiZIndexCount++);

        $(TargetObject).draggable({
            handle: '.dropableTop',
            scroll: false,
            containment: "body",
        });

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $($(this).data('target')).css('display', 'none')
        } else {
            $(this).addClass('active');
        }
    });

    var ModalUiZIndexCount = 1;
    $('#InterMenuModal01, #InterMenuModal02, #InterMenuModal03, #InterMenuModal04, #InterMenuModal05, #InterMenuModal06, #InterMenuModal07').mousedown(function () {
        $(this).css("z-index", ModalUiZIndexCount++);
    });
    $('#IntefaceItems').sortable();


    $('button[data-toggle=closemodal]').click(function () {
        $($(this).data('close')).css('display', 'none');
    });

    function CloseAllModal() {
		$('button[data-toggle=submenu]').each(function(){
			$($(this).data('target')).css('display','none');
            $(this).removeClass('active');
		});
    };
    
    var menuState = 0;
    var menuTransferState = 0;

    function setHoverOnItems() {
        $('.interface_item').unbind('mouseenter mouseleave');
        $('.interface_item').hover(function(){
            if ((menuState !== 1) && (menuTransferState !==1) ) {
                var thisitem = $(this);
                var xpos = $(this).offset().left;
                var ypos = $(this).offset().top;
                var windowWidth = $(window).width();
                if ($(this).hasClass("weapon_item")) {
                    xpos = xpos - 438;
                }
                if (xpos + 410 > windowWidth) {
                    xpos = xpos - 414;
                }
                $('#ItemHoverWindow').css('display','block');
                $('#ItemHoverWindow').offset({left: xpos + 87, top: ypos-2});
                $('#hover_window_name').text(thisitem.data('itemname'));
                $('#hover_window_description').text(thisitem.data('description'));
                $('#hover_window_count').text(thisitem.data('count'));
                if (thisitem.data('price')) {
                    $('#hover_window_price_text').css('display', 'inherit');
                    $('#hover_window_price').text(thisitem.data('price'));
                } else {
                    $('#hover_window_price_text').css('display', 'none');
                };
                if (thisitem.data('src')) {
                    $('#hover_window_image_outer').css('display', 'inherit');
                    $('#hover_window_image').attr('src', thisitem.data('src'));
                } else {
                    $('#hover_window_image_outer').css('display', 'none');
                };
    
            };
        }, function() {
            $('#ItemHoverWindow').css('display','none');
        });
    }

    function rightClickToggle() {
        $('.item_rc').unbind('mousedown');
        $('.item_rc').mousedown(function(e){ 
            if( e.button == 2 ) {
                menuState = 1;
                var item = $(this);
                var useTypes = [0, 2, 3, 4, 6, 8, 9]
                var itemType = item.data('itemtype');
                var itemUseText = item.data('usetext');
                var itemId = item.attr('id');
                var itemCount = item.data('count')
    
                $('#Togglewindow .toggle_li').empty();
                if (useTypes.includes(itemType)) {
                    $('#Togglewindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_action" data-itemid="${itemId}" id="ToggleUse">${itemUseText}</button></li>`);
                }
    
                $('#Togglewindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_action" data-maxcount="${itemCount}" data-itemid="${itemId}" id="ToggleTransfer">Передать</button></li>`);
    
                if (itemType == 3) {
                    $('#Togglewindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_action" data-itemid="${itemId}" id="ToggleDocumentEdit">Редактировать</button></li>`);
                }
                
                $('#Togglewindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_action" data-itemid="${itemId}" id="ToggleDrop">Выбросить</button></li>`);
                $('#Togglewindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_action" data-itemid="${itemId}" id="ToggleDelete">Удалить</button></li>`);
    
                $('#Togglewindow').css('display','block');
                $('#Togglewindow').offset({left: (e.pageX), top: (e.pageY)});
                $('#ItemHoverWindow').css('display','none');
                toggleTransferMenuOff();
            }
        }); 
    }

    function transferPlayersAppend(players, itemId) {
        $("#TransferCount").val(1);
        //todo max value 
        $('#ToggleTransferWindow .toggle_li').empty();
        for (var i = 0; i < players.length; i++) {
            var item = players[i];
            $('#ToggleTransferWindow .toggle_li').append(`<li><button class="btn btn-rdr2 btn-block toogle_transfer" data-itemid="${itemId}" data-serverid="${item.ServerId}">${item.OnlinePlayer.Name} ${item.OnlinePlayer.Surname}</button></li>`);
        }
    }

    $(document).on('click', '.toogle_transfer', function() {
        var count = $("#TransferCount").val();
        var itemid = $(this).data('itemid');
        var serverid = $(this).data('serverid');
        var data = {
            "ServerId": serverid,
            "ItemId": itemid,
            "Count": count
        }
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'InventoryTransferToPlayer',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        }).done((data) => {
            
        });
        toggleTransferMenuOff();
    });

    $(document).on('click', '.toogle_action', function(){ 
        var id = $(this).attr('id');
        var itemid = $(this).data('itemid');
        var data  = {
            "Action":  id,
            "ItemId": itemid
        }
        $.ajax({
            type: "POST",
            url: 'http://' + directoryPath + 'InventoryAction',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        }).done((data) => {
            var result = JSON.parse(data);
            switch (id) {
                case "ToggleUse":
                    InventoryLoad(result.Items);
                    break;
                case "ToggleTransfer":
                    transferPlayersAppend(result, itemid);
                    break;
                case "ToggleDocumentEdit":
                    documentEdit();
                    break;
            default:
            }
        });
        toggleMenuOff();
    }); 

    // Delete this
    $(document).on('click', '.toogle_action', function(){ 
        var id = $(this).attr('id');
        if (id == "ToggleDocumentEdit") {
            documentEdit();
        }
    });
    //

    function documentEdit() {
        var object = $('#textEditor');
        object.dialog({
            width: 500,
            resizable: false
        });
    };

    $(document).on('click', '#preview_document', function(){ 
        var object = $('#textDocument');
        var text = {};
        text.heading = $('#editDocumentsHeading').val();
        text.textarea = $('#editDocumentsTextarea').val();
        if ((!text.heading) & (!text.textarea)) {
            var data = {message: "Заполните все поля", duration:3000};
            showMessage(data);
        } else {
            $(`#textDocument h4`).text(text.heading);
            $('#textDocument .content_textdocument').empty();
            $('#textDocument .content_textdocument').append(text.textarea);
            object.dialog({
                width: 500,
                resizable: false
            });
        }
    });
    

    $('#TransferCountLeft').click(function () {
        var ItemCount = parseInt($('#TransferCount').val());
        ItemCount = parseInt(ItemCount) - 1;
        if (ItemCount < 1) {
            ItemCount = 1;
        }
        $('#TransferCount').val(ItemCount);
    });
    $('#TransferCountRight').click(function () {
        var ItemCount = $('#TransferCount').val();
        var ItemMaxCount = $('#TransferCount').data('maxcount');
        ItemCount = parseInt(ItemCount) + 1;
        if (ItemCount > ItemMaxCount) {
            ItemCount = ItemMaxCount;
        }
        $('#TransferCount').val(ItemCount);
    });
    $("#TransferCount").change(function (){
        var ItemCount = $('#TransferCount').val();
        var ItemMaxCount = $('#TransferCount').data('maxcount');
        if (ItemCount > ItemMaxCount) {
            ItemCount = ItemMaxCount;
        }
        $('#TransferCount').val(ItemCount);
    });

    $(document).click(function(e){
        if ( !$(e.target).closest('#Togglewindow').length ) {
            toggleMenuOff();
        }
    });

    $(document).keydown(function(eventObject){
        if( eventObject.which == 27 ){
            toggleMenuOff();
            toggleTransferMenuOff()
        };
    });

    $( window ).resize(function() {
        toggleMenuOff();
        toggleTransferMenuOff()
    });

    function toggleMenuOff() {
        if ( menuState !== 0 ) {
            menuState = 0;
            $('#Togglewindow').css('display','none');
        }
    }
    
    function toggleTransferMenuOff() {
        if ( menuTransferState !== 0 ) {
            menuTransferState = 0;
            $('#ToggleTransferWindow').css('display','none');
        }
    }

    $(document).on('click', '#ToggleTransfer', function(e){ 
        menuTransferState = 1;
        var maxcount = $(this).data('maxcount');
        $('#TransferCount').data('maxcount', maxcount);
        $('#ToggleTransferWindow').css('display','block');
        $('#ToggleTransferWindow').offset({left: (e.pageX), top: (e.pageY)});
        $('#ItemHoverWindow').css('display','none');
    });
    
    $(document).on('click', '#ToggleTransferWindow .CloseInterface', function(e){ 
        toggleTransferMenuOff();
    });

    $('#ToggleTransferWindow').draggable({
        handle: '.dropableTop',
        scroll: false,
        containment: "body",
    });

    /* IsoTope Inventory */

    $('#interface_group>button').click(function () {
        $('#interface_group>button').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        
    });

    var filterValue;

    $('#interface_group').on( 'click', 'button', function() {
        filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* Admin menu */

    function adminLoad(data, tplist) {
        playerList(data);
        var form = $("#adminForm");
        var button = $('#tp_startTp');
        form.submit(function(){return false;})
        
        $('#tp_location').empty();
        $('#tp_location').append(`<option value="false" elected="selected">не выбрано</option>`);
        for (var count in tplist) {
            $('#tp_location').append(`<option value="${tplist[count].Id}">${tplist[count].Name}</option>`);
        }
        $('#tp_target').empty();
        $('#tp_toplayer').empty();
        $('#tp_target').append('<option selected="selected" value="false">не выбрано</option>');
        $('#tp_toplayer').append('<option selected="selected" value="false">не выбрано</option>');
        for (var count in data) {
            $('#tp_target').append(`<option value="${data[count].Id}">${data[count].Name} ${data[count].Surname} (${data[count].Id})</option>`);
            $('#tp_toplayer').append(`<option value="${data[count].Id}">${data[count].Name} ${data[count].Surname} (${data[count].Id})</option>`);
        }
        
        $("#adminForm select").each(function(){
            $(this).selectmenu();
        });

        $("#adminForm select" ).on( "selectmenuchange", function( event, ui ) {
            var button = $('#tp_startTp');
            if ($(this).attr('id') == "tp_target") {
                if (String($(this).val()) == "false") {
                    $('#tp_span1').html('не выбрано');
                } else {
                    $('#tp_span1').html($(this).val());
                }
                button.data('targeta', $(this).val())
            } 
            if ($(this).attr('id') == "tp_location") {
                if (String($(this).val()) == "false") {
                    $('#tp_span2').html('не выбрано');
                } else {
                    $('#tp_span2').html($(this).val());
                    button.data('targettype','ToPlace');
                }
                button.data('targetb', $(this).val());
            }
            if ($(this).attr('id') == "tp_toplayer") {
                if (String($(this).val()) == "false") {
                    $('#tp_span2').html('не выбрано');
                } else {
                    $('#tp_span2').html($(this).val());
                    button.data('targettype','ToPlayer');
                }
                button.data('targetb', $(this).val());
            }
        });
        $('#tp_coord').change(function(){
            $('#tp_span2').html($(this).val());
            button.data('targetb', $(this).val())
            button.data('targettype','ToCoords');
        });
    }

    function playerList(data) {
        var players = data;
        var grid = $('#adminMenuPlayersList');
        grid.empty();
        grid.isotope('destroy');
        var playerCount = 0;
        for (var count in players) {
            if (players[count].admin == true) {
                var admintext = "admin";
            } else {
                var admintext = "";
            }
            if (players[count].streamer == true) {
                var streamertext = "streamer";
            } else {
                var streamertext = "";
            }
            grid.append(`<button class="playerlist grid-item ${admintext} ${streamertext}" data-playerid="${players[count].Id}" data-name="${players[count].Name} ${players[count].Surname}">(${players[count].Id}) ${players[count].Name} ${players[count].Surname}</button>`);
            playerCount++;
            $('#onlineCount').text(playerCount);
        }

        grid.isotope({
            getSortData: {
                id: `[data-playerid] parseInt`,
                name: '[data-name]'
            }
        });
    }

    $('#sortByPlayerlist').on( 'click', 'button', function() {
        var sortby = $(this).data('sortby');
        var filtervalue = $(this).data('filtervalue');
        $('#adminMenuPlayersList').isotope({ sortBy: sortby });
        $('#adminMenuPlayersList').isotope({ filter: filtervalue});
    });

    $('#adminMenuPlayersList').on( 'click', '.playerlist', function() {
        var name = $(this).data('name');
        var playerid = $(this).data('playerid');
        $('#PlayerInfoModal').dialog({
            width: 500,
            resizable: false
        });
        var object = $('#PlayerInfoModal .content');
        object.empty();
        object.append(`<h4>${name}</h4>`);
        object.append(`<h4>id игрока: ${playerid}</h4>`);
        $('#PlayerInfoModal [data-type="admin"]').each(function(){
            $(this).data('playerid', playerid);
        })
        $('#giveitemtoplayer').data('playerid', playerid);
        $('#giveroletoplayer').data('playerid', playerid);
        $('#removeroletoplayer').data('playerid', playerid);
    });

    $('body').on( 'click', '.AdminMenuWhiteList', function() {
        $('#AdminMenuWhiteListModal').dialog({
            resizable: false
        });
    });
    $('body').on( 'click', '.AdminMenuPropSpawn', function() {
        $('#AdminMenuPropModal').dialog({
            resizable: false
        });
    });

    $('body').on( 'click', '[data-dialog]', function() {

        $(":ui-dialog").each(function(){
            $(this).dialog('close');
        })

        var target = $(this).data('dialog');
        var width = $(this).data('width');
        if (!width) {
            width = 300;
        }
        $(`#${target}`).dialog({
            resizable: false,
            width: width
        });
    });

    $('body').on( 'click', '#giveitemtoplayer', function() {
        var playerid = $(this).data('playerid');
        $('#giveittoplayer_ok').data('playerid', playerid);
    });

    $('body').on( 'click', '#giveroletoplayer', function() {
        var playerid = $(this).data('playerid');
        $('#giveroleplayer_ok').data('playerid', playerid);
    });
    $('body').on( 'click', '#removeroletoplayer', function() {
        var playerid = $(this).data('playerid');
        $('#removeroleplayer_ok').data('playerid', playerid);
    });
    $('body').on( 'click', '#clearlookaccept', function() {
        var playerid = $(this).data('playerid');
        $('#clearlookaccept_ok').data('playerid', playerid);
        console.log($(this).data('playerid'));
    });

    $('body').on( 'click', '#clearpropertyplayer', function() {
        var playerid = $(this).data('playerid');
        $('#clearpropertyplayer_ok').data('playerid', playerid);
    });

    $('body').on( 'click', '[data-type="admin"]', function() {
        var json = {};
        var obj = $(this);
        var command = obj.data('command');
        json.command = command;
        switch(command) {
            case 'giveitem':
                json.itemid = $('#giveitem_id').val();
                json.count = $('#giveitem_count').val();
                if ((!json.itemid) || (!json.count)) {
                    return;
                }
                break;
            case 'giveitemtoplayer':
                json.playerid = $(this).data('playerid');
                json.itemid = $('#giveitemtoplayer_id').val();
                json.count = $('#giveitemtoplayer_count').val();
                break;
            case 'giverole':
                json.playerid = $(this).data('playerid');
                json.role = $('#give_role').val();
                break;
            case 'removerole':
                json.playerid = $(this).data('playerid');
                json.rmrole = $('#remove_role').val();
                break;
            case 'tpplayertome':
            case 'tptoplayer':
            case 'kickplayer':
            case 'banplayer':
            case 'clearpropertyplayer':
                json.playerid = $(this).data('playerid');
                console.log($(this).data('playerid'));
                break;
            case 'clearlookplayer':
                json.playerid = $(this).data('playerid');
                console.log($(this).data('playerid'));
                break;
            case 'call':
                json.playerid = $(this).data('playerid');
                break;
            case 'tpform':
                switch($('#tp_startTp').data('targettype')) {
                    case 'ToPlayer':
                        json.targetPlayer = obj.data('targetb');
                        break;
                    case 'ToPlace':
                        json.targetPlace = obj.data('targetb');
                        break;
                    case 'ToCoords':
                        var coord = obj.data('targetb');
                        coord = coord.replace(/,/g, '');
                        var arr = coord.split(' ');
                        json.targetX = arr[0];
                        json.targetY = arr[1];
                        json.targetZ = arr[2];
                        break;
                }
                if ((String(obj.data('targeta')) == "false") || (String(obj.data('targetb')) == "false")) {
                    var message = {message: "Ошибка, не выбран один из параметров", duration : 4000};
                    showMessage(message);
                    return;
                } else {
                    var message = {message: "Телепортация сработала", duration : 3000};
                    showMessage(message);
                }
                json.targetA = obj.data('targeta');
                json.targetType = $('#tp_startTp').data('targettype');
                break;
            case 'spawnpropbyid':
                json.propid = $('#adminpropadd').val();
                break;
            case 'removepropbyid':
                json.propid = $('#adminpropdelete').val();
                break;
            case 'addplayertowl':
                json.whitelistid = $('#adminwladd').val();
                break;
            case 'removeplayerfromwl':
                json.whitelistid = $('#adminwlremove').val();
                break;
            default:
        }
        sendAdminCommand(json);
    });

    /* cloth menu */

    $('body').on( 'click', '[data-type="cloth_menu"]', function() {
        var json = {};
        var obj = $(this);
        var command = obj.data('command');
        json.command = command;
        switch(command) {
            case 'cloth_puton':
                json.putonid = obj.data('id');
                json.putonname = obj.data('name');
                break;
            case 'cloth_save':
                json.savename = $('#cloth_save_id').val();
                if (!json.savename) {
                    var message = {message:"Ошибка, укажите название комплекта", duration:3000}
                    showMessage(message);
                    return;
                }
                break;
            case 'cloth_delete':
                json.deletename = obj.data('name');
                break;
            default:  
        }
        sendClothCommand(json);
        $("#ClothMenu1").dialog('close');
    });

    $('body').on( 'click', '[data-type="cloth_choose"]', function() {
        var numb = $(this).data('numb');
        $('#cloth_puton').data('numb', numb);
    });

    $('body').on( 'click', '[data-type="cloth_onoff"]', function() {
        var json = {};
        var obj = $(this);
        var command = obj.data('command');
        json.command = command;
        sendClothCommand(json);
    });

    $('body').on( 'click', '[data-type="change_walkstyle"]', function() {
        var json = {};
        var obj = $(this);
        var command = obj.data('walk');
        json.command = command;
        sendWalkstyleCommand(json);
    });

    $('body').on('click', '[data-type="givemoney"]', function () {
        givememoney();
    });
    /* Cosmetics */

    // $('body').on( 'click', '[data-type="admin"]', function() {

    // });

    /* popup */

    function showMessage(data) {
        var messageblock = $('.popup');
        var randomId = Math.floor((Math.random() * 10000) + 1);
        messageblock.append(`<div class="popup_message" style="display:none" id="${randomId}">
            <div class="popup_outer">
                <p>${data.message}</p>
            </div>
        </div>`);
        $(`#${randomId}`).show(800, function(){
            setTimeout(function(){
                $(`#${randomId}`).hide(800);
                setTimeout(function(){
                    $(`#${randomId}`).detach();
                }, 800);
            }, data.duration);
        });
    }

    function showProgress(data) {
        var time = data.duration;
        var color = data.color;
        if (!color) {color = "fff"};
        var text = data.message;
        var progressBlock = $('.progress_block');
        var progressId = Math.floor((Math.random() * 10000) + 1);
        progressBlock.append(`<h4 id="${progressId}h4">${text}</h4>`);
        progressBlock.append(`<div class="progress_${progressId}" id="${progressId}"></div>`);
        
        $(`#${progressId}`).progressbar({
            value: 1
        });
        $(`.progress_${progressId} .ui-widget-header`).css('background-color',`#${color}cc`);

        var count = Math.floor(time / 100);
        var i = 0;
        var Timer = setInterval(function(){
            i++;
            if (i == 100) {
                clearTimeout(Timer);
                $(`#${progressId}`).fadeOut(500);
                $(`#${progressId}h4`).fadeOut(500);
                setTimeout(() => {
                    $(`#${progressId}`).progressbar("destroy");
                    $(`#${progressId}`).detach();
                    $(`#${progressId}h4`).detach();
                }, 500);
            }
            $(`#${progressId}`).progressbar({
                value: i
            });
        }, count);
    }

    /* Test */

    $('.b2').click(function(){
        $('#InterfaceWindow').css('display','block');
        var items = [
            {ItemId : 406, Count : 1, Name : "Бумагa", Type : 3, UseText : "Использовать", ImageHref : "images/items/other/papers.png", Price : 1.00, Weight : 0 }];
        InventoryLoad(items);
    })

    $('.b1').click(function(){
        var elem = $('#adminMenu');
        elem.css('display','block');
        elem.draggable({
            handle: '.dropableTop',
            scroll: false,
            containment: "body",
        });
        var data = [{playerId:1, playerName : "Jhon", playerSurname : "Doe"},
                    {playerId:2, playerName : "Arthur", playerSurname : "Morgan"}]
        var tplist = [{Id : 1, Name : "Valentine"},
        {Id : 2, Name : "Blackwater"},
        {Id : 3, Name : "Stroberry"},
        {Id : 4, Name : "Rhodes"}]

         adminLoad(data, tplist)
    });

    /* Other */
    
    rightClickToggle();
    setHoverOnItems();

    // cam 
    var map = {};
    onkeydown = onkeyup = function (e) {
        map[e.keyCode] = e.type == 'keydown';

        if (map[27]) {
            $.post('http://' + directoryPath + 'close');/*key: escape*/
            map = {};
        } else if (map[17] && map[87]) {
            $.post('http://' + directoryPath + 'W');
        } else if (map[17] && map[83]) {
            $.post('http://' + directoryPath + 'S');
        } else if (map[17] && map[65]) {
            $.post('http://' + directoryPath + 'A');
        } else if (map[17] && map[68]) {
            $.post('http://' + directoryPath + 'D');
        } else if (map[17] && map[16]) {
            $.post('http://' + directoryPath + 'Shift');
        } else if (map[17] && map[32]) {
            $.post('http://' + directoryPath + 'Space');

        } else if (map[17] && map[81]) {
            $.post('http://' + directoryPath + 'Q');
        } else if (map[17] && map[69]) {
            $.post('http://' + directoryPath + 'E');

        } else if (map[17] && map[37]) {
            $.post('http://' + directoryPath + 'LeftArrow');
        } else if (map[17] && map[39]) {
            $.post('http://' + directoryPath + 'RightArrow');
        } else if (map[17] && map[38]) {
            $.post('http://' + directoryPath + 'UpArrow');
        } else if (map[17] && map[40]) {
            $.post('http://' + directoryPath + 'DownArrow');

        } else if (map[17] && map[90]) {
            $.post('http://' + directoryPath + 'Z');
        } else if (map[17] && map[88]) {
            $.post('http://' + directoryPath + 'X');
        } else if (map[17] && map[67]) {
            $.post('http://' + directoryPath + 'C');
        } else if (map[17] && map[86]) {
            $.post('http://' + directoryPath + 'V');

        } else if (map[17] && map[72]) {
            $.post('http://' + directoryPath + 'H');
        } else if (map[17] && map[219]) {
            $.post('http://' + directoryPath + '[');
        } else if (map[17] && map[221]) {
            $.post('http://' + directoryPath + ']');

        } else if (map[17] && map[84]) {
            $.post('http://' + directoryPath + 'T');
        }
    };
});


