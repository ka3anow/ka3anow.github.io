function GetBookDesign(BookType) {
    var BookDesign = [{
        Type : "GunShop",
        CoverImage : "images/ui/book/wheelerawson.png",
        CoverName : "Каталог",
        CoverTitle : "Оружейный магазин",
        CoverBg : "images/ui/book/cover/cover.jpg",
        CoverBgLast: "images/ui/book/cover/cover.jpg",
        SecondImage: "images/ui/book/secondImageWeapon.png",
        PenultImage: "images/ui/book/penultImage.png"
    }, {
        Type : "Registration",
        CoverImage : "images/ui/book/wheelerawson.png",
        CoverName : "Свод законов",
        CoverTitle : "Актуальная версия 1890 года",
        CoverBg : ``,
        CoverBgLast: ``
    }, {
        Type : "FoodShop",
        CoverImage: "images/ui/book/grocery-and-dry-goods.png",
        CoverName : "Каталог",
        CoverTitle : "Продуктовый магазин",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: "images/ui/book/cover/cover_food.jpg"
    }, {
        Type : "PropShop",
        CoverImage: "images/ui/book/grocery-and-dry-goods.png",
        CoverName : "Каталог",
        CoverTitle : "Магазин пропов",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: "images/ui/book/cover/cover_food.jpg"
    },{
        Type : "ItemShop",
        CoverImage: "images/ui/book/grocery-and-dry-goods.png",
        CoverName : "Каталог",
        CoverTitle : "Магазин предметов",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: "images/ui/book/cover/cover_food.jpg"
    },{
        Type : "DrugShop",
        CoverImage: "images/ui/book/drugs-and-tonics.png",
        CoverName : "Каталог",
        CoverTitle : "Лекарства и тоники",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: ""
    }, {
        Type : "ClothShop",
        CoverImage: "images/ui/book/clothing.png",
        CoverName : "Каталог",
        CoverTitle : "Магазин одежды",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: ""
    }, {
        Type : "HunterShop",
        CoverImage: "images/ui/book/sporting-goods-and-guns.png",
        CoverName : "Каталог",
        CoverTitle : "Охотничий инвентарь",
        CoverBg : "images/ui/book/cover/cover_food.jpg",
        CoverBgLast: ""
    }, {
        Type : "HorseShop",
        CoverImage: "images/ui/book/horses.png",
        CoverName : "Каталог",
        CoverTitle : "",
        CoverBg : "images/ui/book/cover/horseShop.jpg",
        CoverBgLast: "images/ui/book/cover/horseShopLast.jpg",
        SecondImage: "images/ui/horses/book/secondImage.png",
        PenultImage: "images/ui/book/penultImage.png"
    }, {
        Type: "VehiclesShop",
        CoverImage: "images/ui/book/horses.png",
        CoverName : "Каталог",
        CoverTitle : "",
        CoverBg : "images/ui/book/cover/vehiclesShop.jpg",
        CoverBgLast: "images/ui/book/cover/horseVehiclesLast.jpg",
        SecondImage: "images/ui/book/secondImageVagons.png",
        PenultImage: "images/ui/book/penultImage.png"
    }];
    return BookDesign.find(x=>x.Type == BookType);
};

function GetHorseGroup(data) {
    var Group = [
        {Type: 0, GroupName: "Американский пейнтхорс", MainImageHref: "images/ui/horses/Americanpaint.png"},
        {Type: 1, GroupName: "Американский рысак", MainImageHref: "images/ui/horses/Americanstandardbred.png"},
        {Type: 2, GroupName: "Андалузская", MainImageHref: "images/ui/horses/Andalusian.png"},
        {Type: 3, GroupName: "Аппалуза", MainImageHref: "images/ui/horses/Appaloosa.png"},
        {Type: 4, GroupName: "Арабская", MainImageHref: "images/ui/horses/Arabian.png"},
        {Type: 5, GroupName: "Арденская", MainImageHref: "images/ui/horses/Ardennes.png"},
        {Type: 6, GroupName: "Бельгийская упряжная", MainImageHref: "images/ui/horses/Belgian.png"},
        {Type: 7, GroupName: "Голландская полукровная", MainImageHref: "images/ui/horses/DutchWarmblood.png"},
        {Type: 8, GroupName: "Венгерсая полукровка", MainImageHref: "images/ui/horses/Hungarianhalfbred.png"},
        {Type: 9, GroupName: "Миссурийский фокстроттер", MainImageHref: "images/ui/horses/Missourifoxtrotter.png"},
        {Type: 10, GroupName: "Нокота", MainImageHref: "images/ui/horses/Nokota.png"},
        {Type: 11, GroupName: "Шайрская", MainImageHref: "images/ui/horses/Shire.png"},
        {Type: 12, GroupName: "Суффолькская", MainImageHref: "images/ui/horses/Suffolkpunch.png"},
        {Type: 13, GroupName: "Теннессийская", MainImageHref: "images/ui/horses/Tennesseewalker.png"},
        {Type: 14, GroupName: "Чистокровная", MainImageHref: "images/ui/horses/Thoroughbred.png"},
        {Type: 15, GroupName: "Ахалтекинская", MainImageHref: "images/ui/horses/Turkoman.png"},
        {Type: 16, GroupName: "Мустанг", MainImageHref: "images/ui/horses/Mustang.png"},
        {Type: 17, GroupName: "Морган", MainImageHref: "images/ui/horses/Morgan.png"},
        {Type: 18, GroupName: "Кентуккийская верховая", MainImageHref: "images/ui/horses/Kentuckysaddle.png"},
        {Type: 19, GroupName: "Норфолк", MainImageHref: "images/ui/horses/Ardennes.png"},
        {Type: 20, GroupName: "Кладрубская", MainImageHref: "images/ui/horses/kladruber.png"},
        {Type: 21, GroupName: "Бретонская", MainImageHref: "images/ui/horses/Breton.png"},
        {Type: 22, GroupName: "Креольская", MainImageHref: "images/ui/horses/Criollo.png"},
        {Type: 30, GroupName: "Gangbang", MainImageHref: "images/ui/horses/Gang.jpg"}
    ]
    return Group.find(x=>x.Type == data);
}
function GetWeaponGroup(data) {
    var Group = [
        {Type: 0 , GroupName: "Пистолет"},
    ]
    return Group.find(x=>x.Type == data);
}

function GetAnimationGroup(data) {
    var Groups = [
        {Group: 0 , GroupName: "Основные"},
        {Group: 1 , GroupName: "Сидеть"},
        {Group: 2 , GroupName: "Лежать"},
        {Group: 3 , GroupName: "Курить"},
        {Group: 4 , GroupName: "Пить"},
        {Group: 5 , GroupName: "Лагерь"},
        {Group: 6 , GroupName: "Бар"},
        {Group: 99 , GroupName: "Остальное"}
    ]
    return Groups.find(x=>x.Group == data).GroupName;
}