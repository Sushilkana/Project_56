var canvas = new fabric.Canvas("Canvas1");
var Ranger = "rr1.png"
var Ranger_X = 20,Ranger_Y = 50,Ranger_Height = 400,Ranger_Width = 100;

function Add_Images(Get_Image) {
    fabric.Image.fromURL(
        Get_Image, function (img) {
            Ranger_Object = img;

            Ranger_Object.scaleToWidth(Ranger_Width);
            Ranger_Object.scaleToHeight(Ranger_Height);
            Ranger_Object.set({ top: Ranger_Y, left: Ranger_X });
            canvas.add(Ranger_Object);
        }
    )
}

window.addEventListener("keydown", Upload_image);

function Upload_image(e) {
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == "82") {
        console.log("Agni");
        Ranger_X = 20,Ranger_Y = 50;
        Add_Images("rr1.png");

    } else if (keyPress == "71") {
        console.log("Juvenile");
        Ranger_X = 250;
        Add_Images("gr.png");

    } else if (keyPress == "66") {
        console.log("Aman");
        Ranger_X = 350;
        Add_Images("br.png");

    } else if (keyPress == "89") {
        console.log("Happy");
        Ranger_X = 770;
        Add_Images("yr.png");

    } else if (keyPress == "80") {
        console.log("Amity");
        Ranger_X = 1100;
        Add_Images("pr.png");
    }
}