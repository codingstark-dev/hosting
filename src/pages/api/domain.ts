
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
let {domainQuery, } = req.query 
  const domain = await fetch("https://ambitionhost.in/user/index.php?rp=/domain/check", {
    "headers": { 
      "accept": "*/*",
      "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ambitionhost.in/user/cart.php?a=add&domain=register",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `token=606f763c427a9e1c8a70af5ea7b6e5723a8d68f6&a=checkDomain&domain=${domainQuery}&type=domain`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((e) => e.json());
  const spotlight = await fetch("https://ambitionhost.in/user/index.php?rp=/domain/check", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": " ?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ambitionhost.in/user/cart.php?a=add&domain=register&query=https://pinterestdownloader.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `token=606f763c427a9e1c8a70af5ea7b6e5723a8d68f6&a=checkDomain&domain=${domainQuery}&type=spotlight`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((e) => e.json());
  const suggestions = await fetch("https://ambitionhost.in/user/index.php?rp=/domain/check", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ambitionhost.in/user/cart.php?a=add&domain=register&query=https://pinterestdownloader.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `token=606f763c427a9e1c8a70af5ea7b6e5723a8d68f6&a=checkDomain&domain=${domainQuery}&type=suggestions`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((e) => e.json());
  res.status(200).json({ domain, spotlight, suggestions })
}