import  { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import React from "react";

function Home() {
    const {mode, setMode, toggle} = useContext(ThemeContext)
    
    return (
        <div className='mt-[50px]'>
            <p className={`p-3 ${mode ? 'bg-cyan-600 '  : 'bg-red-700 text-white'}`}>Boshlang‘ich sinfda o‘qiyotgan paytlarim edi, yoshim 10 da edi. U davrda sartaroshxonalar ko‘p bo‘lmasdi. Bizning mahallada etikdo‘zlar ishlaydigan kichkina kulbada sartaroshxona ochildi. O‘rtog‘imning onasi biz – 3-4 ta bolani o‘sha yerga olib bordilar birinchi marta. Sartarosh 50 yoshlardan oshgan odam edi. O‘rtog‘imning onasi bizni o‘sha yerga tashlab ketdi, sochimizni kal qilib oldirib chiqqanmiz. U odam kulib turardi, bizni ham kuldirib gapirgani uchun yana borgimiz kelardi.

Bir-ikki oy o‘tgach, yana bordik soch oldirishga. O‘shanda menga sen do‘mboqqina ekansan, yuzlaring shirin ekan, deb har xil gaplar aytdi. Sochimni olayotganda badamyunimning har joyiga tegib ketib, noqulay holatga tushiradigan harakatlar qilgan. Bizga hech kim bu narsa haqida aytmagan, shuning uchun soch olayotgan paytda tegib ketayotgandir, deb o‘tiraverganman. Chiqib ketayotganimda yelkamga urib, «Sen kelgin, albatta, kutaman» dedi. Bolalar bilan soch oldirishga borib turdik.

Iyun oylari edi, 4-sinfni bitirayotganimda sartaroshxonaga bir o‘zim borishimga to‘g‘ri kelib qoldi. Borsam, bir keksaroq odamning soqolini olayotgan ekan, meni ko‘rib xursand bo‘lib ketdi. Keksa odam ketgach, yaxshi gapirib mening sochimni oldi. Qarshi bo‘lmasang, oynani yopaman, dedi, nimaga bunday deganini bilmay rozi bo‘ldim. Xona qorong‘iroq bo‘ldi. Eshikni ham yopgan ekan, sezmagandim. Keyin oldimga kelib, seni yaxshi ko‘rib qoldim, shiringina, do‘mboq bola ekansan, qo‘rqma, men senga yomonlik qilmayman, deb gapirib boshladi. Shundan keyin oyoqlari bilan oyog‘imni qisib yuzimga teginishni boshladi, qo‘rqib ketdim. Tomog‘imdan qisib oldi, gapirolmay qoldim, xuddi o‘ldirib qo‘yadiganday edi. «Qo‘rqma» deb bir qo‘li bilan shalvarimni tushirishni boshladi. Men titray boshladim. «Seni yaxshi ko‘raman, qo‘rqma, yaxshi bo‘ladi. O‘g‘il bolasan-ku...» degan gaplar aytdi. Qo‘rqqanimdan terlab, ko‘zimdan yosh oqa boshladi. Nima bo‘layotganini bilmasdim, turaman desam, qo‘li bilan orqaga bosib turdi. Yaxshi ko‘raman degan gapni ko‘p aytaverdi. Aytishga ham qiynalaman. Boshini pastimga olib... 2-3 daqiqa davom etdi, lablarini, soqolini sezdim. Keyin tortmadan nimadir olib artdi... «Senga aytdim-ku, maza qilasan» dedi. Nima bo‘lganini bilmasdim, qo‘rqib ketdim. Turishga ham holim yo‘q edi. Meni turg‘izayotganda ham o‘pishga harakat qildim, ijirg‘anib yuzimni olib qochdim. Qanaqadir suyuqlik chiqqanidan qo‘rqib ketdim. Ota-onamiz yo boshqa birov bizga bunaqa narsalar haqida gapirmagan. Meni o‘ldirib qo‘yadi degan o‘y o‘taverdi. Ko‘nglim aynib ketaverdi. Oynalarni ochib, ko‘chaga kichkina stulchaga o‘tqazdi meni. Suv olib chiqdi, lekin uni ichishdan qo‘rqdim, ichiga nimadir solib qo‘ygan deb o‘yladim. Boshqa odamlarni sartaroshxona ishlamayapti deb qaytarib yuboraverdi. Qo‘l-oyoqlarim uvishib o‘rnimdan turolmasdim, ichimda «qochib ket» degan ovoz kelardi, lekin hech qayerim ishlamasdi. Bilmayman qancha o‘tirganimni. Ko‘nglim ayniyverdi, u odamdan badbo‘y hid kelardi. O‘sha hid hali ham miyamda qolib ketgan.

Sal o‘zimga kelganimdan keyin olib borib qo‘yaman dedi, yo‘q dedim, o‘zim bir amallab kuch topib turdim. «Yaxshi bo‘ldi-ku, maza qilding-ku» degan gaplar aytdi, yana nimalar deb qolganini eslolmayman. Uyga qanday yetib borganimni ham bilmayman. O‘zimni xuddi kirday his qilardim. Hovliga kirishim bilan shlangdan chiqayotgan suvni ustimdan quydim. Soch oldirganim uchun shunaqa qilyapti deb o‘ylashdi ota-onam. Xonaga kirgach, faqat ko‘zimga yosh kelaverdi. O‘zimcha u odam menga qanaqadir kasal yuqtirdi, yiringli narsa bo‘lsa kerak, deb o‘yladim. Onamga aytgim keldi. Ko‘zimni yumsam, meni bo‘g‘ayotgani tasavvurimda paydo bo‘laverardi. Onamning sog‘lig‘i yaxshi bo‘lmagani uchun aytishga qo‘rqdim. O‘zimni ayblor his qilaverardim. Ko‘nglim ayniyverardi. Yaqin do‘stimga aytmoqchi bo‘ldim, lekin aytolmadim.

O‘sha sartaroshxonaga bormay qo‘ydim. O‘rtoqlarimdan doim so‘rar ekan meni. Uyimni, maktabimni surishtiribdi ulardan. Doim kulib yuradigan bola edim ilgari, ota-onam senga nima bo‘lyapti, deb so‘rardi. Bir marta maktab yonida ko‘rib qo‘rqib ketganman. O‘shanda niia bo‘lganini hech tushunolmasdim, birov aytmagan ham bizga. Keyinchalik jinsiy hayot haqida katta akalarimizdan eshitib bila boshladim, lekin u odamning qilgan ishini tushunolmasdim. O‘zimni aybdor his qilardim, kirdek tuyulardim o‘zimga. Bir o‘zim yurishga qo‘rqadigan bo‘lib qolgandim. Maktabga ketishda ham o‘rtoqlarim chaqirgpch, birga ketardim.

Katta bo‘lib u-bu narsani bila boshlaganimda o‘zimdan jirkanib ketardim. O‘zimni eng past odamdek his qilardim. Oliygohga o‘qishga kirib, o‘qib yurgan paytlarimda pedofil haqida bilganman. U odam qarib qolgan, bolalari, nevaralari bor edi. Topib borib o‘ldirgim kelardi.</p>
           <p className={`p-3 ${mode ? 'bg-cyan-600 ' : 'bg-red-700 text-white'}`}>Respublikaning turli hududlarida kunora yo‘l-transport hodisalari sodir bo‘ladi. Ularning kattagina qismi insonlar o‘limi bilan yakun topadi. 

Albatta, avariyalarning aksariyati haydovchilarning qo‘pol qoidabuzarligi bilan sodir etiladi. Ularning xatosini boshqa bir haydovchi takrorlamasligi, yo‘lda yuruvchilar xulosa qilishi uchun mazkur YTHlar haqida tezkor axborotlar berib borilishi zarur. 

Ammo keyingi vaqtlarda Ichki ishlar vazirligi Jamoat xavfsizligi departamenti Yo‘l harakati xavfsizligi xizmati negadir bunday holatlarni ommadan yashirishga urinmoqda. 

Jumladan, 11 fevral kuni tunda Qamchiq dovonida mudhish YTH sodir bo‘lgan. Tafsilotlar quyidagicha: Qamchiq dovoni hududidan o‘tgan xalqaro ahamiyatdagi A-373 avtomobil yo‘lining 222-kilometrida DAF hamda Isuzu mashinalari to‘qnashgan. DAF haydovchisi harakat xavfsizligini ta’minlamasdan, yo‘lning xavfli burilish qismida boshqaruvni yo‘qotgan. 

Buning oqibatida ikki haydovchi hamda uch nafar yo‘lovchi tan jarohati olib voqea joyida vafot etgan. 

Ammo mazkur YTH haqida Yo‘l harakati xavfsizligi xizmati ikki kun o‘tib, videolar ijtimoiy tarmoqlarda tarqalganidan keyingina rasmiy ma’lumot berdi. 

Shu kabi YTH 22 yanvar kuni Buxoro viloyatining Jondor tumanida sodir bo‘lgan: «G‘uzor-Buxoro-Nukus-Beyneu» A-380 avtomagistral yo‘lining Jondor tumani hududidan o‘tgan 299-kilometrida Isuzu qarama-qarshi yo‘nalishda kelayotgan Lacetti bilan to‘qnashib ketgan. 

Jondor tumani hokimi YTHning oqibatlarini bartaraf etish va shu kabi baxtsiz hodisalarning oldini olish to‘g‘risida farmoyish chiqardi.</p>

         

        </div>
    );
}

export default Home;