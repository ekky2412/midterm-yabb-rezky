import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../repositories/products/models/product.js";
// import Comment from "../repositories/products/models/comment.js";
// import Video from "../repositories/products/models/video.js";

dotenv.config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

let products = [];

products[0] = new Product({
  productID: "1",
  linkProduct:
    "https://www.tokopedia.com/brotherholicstor/baju-kaos-hitam-lengan-pendek-baju-kaos-ditro-hitam-putih",
  title: "Baju kaos hitam lengan pendek / Baju kaos ditro hitam - Putih",
  price: 20000,
  videoId: "1",
});
products[1] = new Product({
  productID: "2",
  linkProduct:
    "https://www.tokopedia.com/oshifureru/arknights-nian-dragon-bubble-plush-23cm-fp",
  title: "Arknights Nian Dragon Bubble Plush (23cm)",
  price: 524025,
  videoId: "2",
});
products[2] = new Product({
  productID: "3",
  linkProduct:
    "https://www.tokopedia.com/fureru/arknights-dusk-running-dragon-bubble-key-chain-plush-12cm-full-payment",
  title: "Arknights Dusk Running Dragon Bubble Key Chain Plush (12cm)",
  price: 215625,
  videoId: "2",
});
products[3] = new Product({
  productID: "4",
  linkProduct:
    "https://www.tokopedia.com/verry-lie/samsung-led-tv-32-inch-dvb-t2-32t4001-usb-movie-resmi",
  title: "SAMSUNG LED TV 32 INCH DVB-T2 32T4001 [USB MOVIE] - RESMI",
  price: 1583401,
  videoId: "3",
});
products[4] = new Product({
  productID: "5",
  linkProduct:
    "https://www.tokopedia.com/nlkr5/ac-aqua-japan-1-2-pk-pasang-instalasi-kr5-ane-0-5-pk-unit-pasang",
  title:
    "AC AQUA JAPAN 1/2 pk + PASANG INSTALASI Kr5 ane 0.5 pk - UNIT + PASANG",
  price: 2695000,
  videoId: "3",
});
products[5] = new Product({
  productID: "6",
  linkProduct:
    "https://www.tokopedia.com/seisapilamaleraemong/sei-sapi-100gr-slice",
  title: "Sei Sapi 100gr slice",
  price: 45000,
  videoId: "4",
});
products[6] = new Product({
  productID: "7",
  linkProduct:
    "https://www.tokopedia.com/freshpasta/sei-sapi-asap-morteza-khas-ntt-kupang-halal-sambal-ijo",
  title: "sei sapi asap morteza khas ntt kupang halal - sambal ijo",
  price: 69600,
  videoId: "4",
});
products[7] = new Product({
  productID: "8",
  linkProduct:
    "https://www.tokopedia.com/msi-official/msi-gf63-thin-11uc-i7-11800h-rtx3050-15-6-fhd-ips-level-144hz",
  title: `MSI GF63 Thin 11UC i7-11800H RTX3050 15.6" FHD IPS-Level 144Hz`,
  price: 11499000,
  videoId: "5",
});
products[8] = new Product({
  productID: "9",
  linkProduct:
    "https://www.tokopedia.com/thinkpadofficial/lenovo-v14-gen-2-itl-core-i5-1135g7-8gb-512ssd-14-0-hd-free-dos-3aid-8gb-ram-normal-bundling",
  title:
    "Lenovo V14 Gen 2 ITL Core I5-1135G7 8GB 512SSD 14.0 HD Free Dos 3AID - 8GB RAM, Normal Bundling",
  price: 8199000,
  videoId: "5",
});
products[9] = new Product({
  productID: "10",
  linkProduct:
    "https://www.tokopedia.com/nvidiageforcelt/lenovo-legion-pro-5-16-geforce-rtx-4070-i7-13700hx-32gb-1tb-tanpa-antigores-32gb-0436c",
  title:
    "Lenovo Legion Pro 5 16 GeForce RTX™ 4070 - I7 13700HX 32GB 1TB - TANPA ANTIGORES, 32GB",
  price: 31649000,
  videoId: "5",
});

// add comments
// add videos

function check(i) {
  if (i == 10) {
    process.exit();
  }
}

products.forEach(async (p, i = 0) => {
  await products[i].save();
  await check(i);
  i++;
});
