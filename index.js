// var change = function () {
//     //Dom đến nội dung h1#tieuDe
//     var noiDung=document.getElementById('content');
//     //Thay đổi màu chữ
//     noiDung.innerHTML='Đã thay đổi rồi nhé.!';
// }

// var btnChange = document.getElementById('btnChange');
// btnChange.onclick = change;

// var changeDenB = function()  {
//     var hinhAnh=document.getElementById('img');
//     hinhAnh.src = './img/pic_bulbon.gif';
// }
// var btnChangeDenB = document.getElementById('btnChangeDenB');
// btnChangeDenB.onclick = changeDenB;

// var changeDenT = function()  {
//     var hinhAnhT=document.getElementById('img');
//     hinhAnhT.src = './img/pic_bulboff.gif';
// }
// var btnChangeDenT = document.getElementById('btnChangeDenT');
// btnChangeDenT.onclick = changeDenT;

// Cách 2:
document.getElementById('btnChange')
.addEventListener("click", function()
{
    var noiDung=document.getElementById('content');
    noiDung.innerHTML='Đã thay đổi rồi nhé.!';
})
// ---------------------------------------------
document.getElementById('btnChangeDenB')
.addEventListener("click",function()
{
    var hinhAnh=document.getElementById('img');
    hinhAnh.src = './img/pic_bulbon.gif';
    // var hinhNen=document.getElementById('btnChangeDenB');
    // var hinhNen1=document.getElementById('btnChangeDenT');
    // hinhNen.className = 'btnActive';
    // hinhNen1.className = '';

    // hinhNen.style.backgroundColor = 'pink'
    // hinhNen.style.color = 'red'
})
document.getElementById('btnChangeDenT')
.addEventListener("click",function()
{
    var hinhAnhT=document.getElementById('img');
    hinhAnhT.src = './img/pic_bulboff.gif';
    // var hinhNen=document.getElementById('btnChangeDenB');
    // var hinhNen1=document.getElementById('btnChangeDenT');
    // hinhNen.className = '';
    // hinhNen1.className = 'btnActive';
})


/**
 * cach 2:
 * document.getElementById('btnNhanEmDi')
 * .addEventListener("click",function ()
 * {
 *  //Dom truy xuat den the p thong qua id
 * var theP = document.getElementById('txt_p');
 * theP.innerHTML = 'Noi dung da dc thay doi';
 * })
 */

// Bài 3
var fontS = 16;

document.getElementById('text_font').style.fontSize = fontS + 'px';

// Cài đặt sự kiện click khi người dùng click +
document.getElementById('btnTangFont').onclick = function(){
    //Tăng giá trị fontS
    fontS = fontS +1;
    //Gán giá trị mới cho fontSize của thẻ
    document.getElementById('text_font').style.fontSize = fontS + 'px';
}

// Cài đặt sự kiện click khi người dùng click -
document.getElementById('btnGiamFont').onclick = function(){
    //Tăng giá trị fontS
    fontS = fontS - 1;
    //Gán giá trị mới cho fontSize của thẻ
    document.getElementById('text_font').style.fontSize = fontS + 'px';
}

