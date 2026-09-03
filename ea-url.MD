## AUCTION HOUSE ## MADDEN 26 XBOX 
***100% COMFIRMED WORKING*** 
-- THIS IS THE SOURCE OF TRUTH 
***100% COMFIRMED WORKING*** 
                                                   ***XBOX***
## POST https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/{sessionKey}  ##
***100% COMFIRMED WORKING*** 
The key command in your capture is:

Mobile_SearchAuctions

```json
{
  "filters": [],
  "itemName": ""
}
The response is real Auction House data.

It returns:

{
  "auctionId": 57827505,
  "buyoutPrice": 1400,
  "currentBid": 1400,
  "card": {
    "cardInstanceId": 4133252757,
    "condensedName": "R. Ouzts",
    "cardId": 35015109,
    "cardData": {
      "value": {
        "playerId": 15109,
        "firstname": "Robbie",
        "lastname": "Ouzts",
        "overallRating": 81
      }
    }
  }
}

And the capture contains 100 auction listings in that response.

Even better — there is a dedicated sales endpoint

Your capture also contains:

Mobile_GetItemAuctionSales

with:

{
  "itemId": 98032520
}

That returns:

activeAuctions
recentAuctions
responseData
That is extremely relevant to what you're trying to build.

So we're not just looking at static player data. We're looking at EA's actual MUT auction-service commands.

The important endpoints/commands we've recovered
Purpose	EA command
🔎 Auction House search	Mobile_SearchAuctions
📈 Player/card auction sales	Mobile_GetItemAuctionSales
📦 Posted auctions	Mobile_GetPostedAuctions
💰 Auction bids	Mobile_GetAuctionBids
👤 Eligible players	Mobile_GetEligiblePlayerPage
📚 Binder	Mobile_GetBinderPage

And the auction search response gives us the exact fields we need:

auctionId
buyoutPrice
currentBid
cardInstanceId
cardId
playerId
firstname
lastname
overallRating
position
assetName

So yes — this capture is valuable.

One very important distinction

The endpoint isn't a normal REST API like the old:

/data/1/auctions/6814

It's EA's Blaze/MCA command interface.

Conceptually it's:

POST
wal2.tools.gos.bio-iad.ea.com
        ↓
/wal/mca/Process/{sessionKey}
        ↓
commandName = Mobile_SearchAuctions
        ↓
requestPayload
        ↓
Auction House response

That explains why you saw that weird-looking address instead of a nice /auctionhouse/search URL.

And we have actual live prices from your capture

For example, the captured Auction House response contained:

Player	OVR	Current Bid	Buyout
Robbie Ouzts	81	1,400	1,400
Del'Shawn Phillips	86	2,000	2,059
Kolton Miller	80	1,000	2,800
Quenton Nelson	99	199,999	200,200
Jordan Whittington	80	1,025	1,025
Devin Lloyd	81	1,125	1,125
David Bailey	99	247,200	248,200
Charles Woodson	92	54,500	55,000
Tyreek Hill	94	621,500	622,500
Dak Prescott	99	357,200	414,200

That's definitive evidence that we have the market data path.

One thing I want to make clear

The capture you uploaded is Madden 26, not MUT 27 — the EA product/session identifies itself as:

madden-2026-xbsx-mca

and the assets are under:

/gameplayservices/prod/Madden/2026/

But the architecture and command names we've recovered are exactly what we need to investigate the M27 implementation.

Also, your capture contains live EA authentication/session material. Don't reuse or publish the captured token/session key; I've intentionally not reproduced those credentials here.

So your instinct was correct: the address you saw while searching players was the important address. The Auction House request was just buried inside EA's wal/mca/Process command system rather than exposed as the old-style REST URL.


https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4330/133e1569-7e84-416c-87cb-5e064c6b7b2f/Back/PH_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4330/133e1569-7e84-416c-87cb-5e064c6b7b2f/Back/PH_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4330/133e1569-7e84-416c-87cb-5e064c6b7b2f/Back/PH_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4330/133e1569-7e84-416c-87cb-5e064c6b7b2f/Back/PH_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/330/84800191-2e0c-419a-b74a-ec4ef4f30f5a/Players/CadeOtton.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/330/84800191-2e0c-419a-b74a-ec4ef4f30f5a/Players/DerickHall.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/330/84800191-2e0c-419a-b74a-ec4ef4f30f5a/Players/ChumaEdoga.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/200/98e82b00-2790-4cf9-bf3f-eec0d84a248e/Frame/CollectorsSeries1_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/200/98e82b00-2790-4cf9-bf3f-eec0d84a248e/Frame/CollectorsSeries1_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/200/98e82b00-2790-4cf9-bf3f-eec0d84a248e/Frame/CollectorsSeries1_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/200/98e82b00-2790-4cf9-bf3f-eec0d84a248e/Players/WyattTeller_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/720/6f194cde-ccc2-4640-a4c4-45cafdffd2f2/Players/HunterHenry.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/720/6f194cde-ccc2-4640-a4c4-45cafdffd2f2/Players/DJMoore.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2700/4a1e279a-dbaa-4803-a72e-36fb1ddf45cb/Players/BrandonMcManus.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1730/24e6ab8b-0874-49f1-acb5-292e99e96bf2/Players/NickScott.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1730/24e6ab8b-0874-49f1-acb5-292e99e96bf2/Players/MitchellFraboni.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1730/24e6ab8b-0874-49f1-acb5-292e99e96bf2/Players/TimTebow.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1450/3c0f22d0-bc9f-42ca-a86b-56c237edfefb/Players/IrvingFryar_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2100/6302976c-8357-4977-a752-be78158cc602/Players/DavanteAdams_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1330/c779fa84-7d69-43ee-a94d-8b3ad0992e28/Players/JackSawyer.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/250/3a4fb9b7-3b6c-40db-9577-5862deb245b6/Players/JeremyShockey_Uncommon.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/250/3a4fb9b7-3b6c-40db-9577-5862deb245b6/Players/JeremyShockey_HeroElite.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/WillFries.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/KevinDotson.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/KobieTurner.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/CobyBryant.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/JackSanborn.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/AmikRobertson.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/JevonHolland.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/FrankieLuvu.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/JohnFranklinMyers.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/KadenElliss.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/CameronDicker.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/IkemEkwonu.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/RonnieStanley.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/Core/9541238a-fa88-465d-9124-62cc9eeb06be/Players/OdafeOweh.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1520/6fd4a9c6-a1ba-45bf-aa75-1c4ddc4e9c43/Players/BrockPurdy.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/530/4126add8-8be5-443f-bfe3-6da46320888d/Players/JamesDaniels.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4430/2a399644-241a-4a78-bd45-cd8b2e99a59d/Players/EvanWilliams.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/PregameAccess/b10cc1ac-b7f0-4822-a77e-5f76b7b8c27a/Players/TerenceSteele.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/PregameAccess/b10cc1ac-b7f0-4822-a77e-5f76b7b8c27a/Players/JelaniWoods.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3300/a1b9195b-2825-4fb5-9cd2-53cd4fc86fc8/Frame/M26_CollectorsSeries7_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3700/605605f3-a3d6-47e4-bb68-0a1892e449ef/Players/JackHam_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4830/6f1680be-5e23-4d7c-b310-4bb938114716/Players/Ji'AyirBrown.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4830/6f1680be-5e23-4d7c-b310-4bb938114716/Players/JonahWilliams.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4830/6f1680be-5e23-4d7c-b310-4bb938114716/Players/TressWay.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/600/f3b2107d-5e57-4c93-a5ff-f0d42f8ffca5/Players/JaxonSmithNjigba_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2930/88ac7be9-0dec-4681-a309-577d662e685e/Players/JamesBurnip.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2930/88ac7be9-0dec-4681-a309-577d662e685e/Players/Combine_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2930/88ac7be9-0dec-4681-a309-577d662e685e/Back/Combine_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2930/88ac7be9-0dec-4681-a309-577d662e685e/Frame/Combine_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2230/18f51095-e30f-4bbc-861d-00de26320a0d/Players/NoahSewell.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3610/9048d3e7-4d53-416b-bd18-dedf308fa11d/Players/JoeFlacco_Champ.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1950/c1d00670-234e-45fb-b416-648091be94f8/Players/JonathanVilma.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/150/4b71065b-9816-48c2-a725-e403fa9dec47/Frame/Legends_LTDFrame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3330/012f2793-6fa2-4796-8218-d701a9861071/Players/TeeHiggins_Champ.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3330/012f2793-6fa2-4796-8218-d701a9861071/Frame/SugarRush_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3330/012f2793-6fa2-4796-8218-d701a9861071/Logo/SugarRush_128.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4630/9d2e8958-a7ca-4833-9952-fefb9ef3da4e/Players/OdellBeckhamJr.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1030/ee9ca3d2-6725-4f34-9839-b8eca663b348/Players/RileyMoss.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1030/ee9ca3d2-6725-4f34-9839-b8eca663b348/Players/BrandonAiyuk.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1030/ee9ca3d2-6725-4f34-9839-b8eca663b348/Frame/M26_MF_Frame_UndercityRoyalty.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1620/8c608f26-df33-4434-94f1-82549a919876/Players/NolanSmithJr.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1620/8c608f26-df33-4434-94f1-82549a919876/Back/Blitz_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1620/8c608f26-df33-4434-94f1-82549a919876/Back/Blitz_PlayerBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2730/7662fa40-2a3a-4c03-8102-121992101784/Players/TrentSieg.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2730/7662fa40-2a3a-4c03-8102-121992101784/Players/NathanielWatson.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4530/e2478a97-d8b6-4898-8b7c-03a8b7f91939/Players/Rewind.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4530/e2478a97-d8b6-4898-8b7c-03a8b7f91939/Players/Rewind.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/4530/e2478a97-d8b6-4898-8b7c-03a8b7f91939/Players/FanApp_BoNix_Champ.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3520/f5fabbe4-fc2f-40e2-a52d-73d7205ca2cb/Players/TytusHoward_High.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/550/0341788f-fa3f-4a38-9e0e-1339f9df08e1/Players/DerrickBrooks_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/0/f7b758ee-20bd-4ed4-a32d-13ee69c886cf/Players/BenSauls.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/0/f7b758ee-20bd-4ed4-a32d-13ee69c886cf/Players/BradyCook.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2900/059e702c-89eb-43b9-a8b9-3ce6047a4e69/Players/TimBrown_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2800/1d87c42c-cddb-48a9-81cd-503b6eab9fc7/Frame/M26_CollectorsSeries4_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3220/1a23a0bb-f9a9-40c2-8de8-099e0f34561f/Players/AustinSeferianJenkins_Champ.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3120/60f08c09-2a3f-4abd-84cc-0a685be6f67c/Players/DanielJones.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3120/60f08c09-2a3f-4abd-84cc-0a685be6f67c/Frame/DanielJones_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/3120/60f08c09-2a3f-4abd-84cc-0a685be6f67c/Back/M26_FreeAgency_PlayerBack_LTDs.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1250/6e44b6e2-9864-4dcf-bc1b-cb8c663876c7/Players/AshtonJeanty.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/400/31ec4c71-185b-4244-b26f-80cff3d473df/Players/AzeezAlShaair_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2740/956974b1-2fd0-46f6-bb64-182092a63e5a/Players/MatthewStafford_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2740/956974b1-2fd0-46f6-bb64-182092a63e5a/Players/MatthewStafford_Low.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1100/6f29afcb-8901-4251-8026-d5a541a0c7e9/Frame/CollectorsSeries2Collection_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/900/0eb4e845-b8a7-487a-9937-c82a99a7003d/Players/CamNewton_LTD.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/750/b28d6fb8-1fb7-45e6-916d-7aabefb61dd9/Players/RichGannon_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/750/b28d6fb8-1fb7-45e6-916d-7aabefb61dd9/Players/RichGannon_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/750/b28d6fb8-1fb7-45e6-916d-7aabefb61dd9/Players/RichGannon_Hero.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1230/a1982f85-4cf4-434a-a7e5-a019a42d4628/Players/JoeBurrow_Base.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2600/b97c9e81-9f9b-4360-967b-f2b16c9cfb92/Players/DakPrescott.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2600/b97c9e81-9f9b-4360-967b-f2b16c9cfb92/Back/BHM_PlayerCardBack.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2600/b97c9e81-9f9b-4360-967b-f2b16c9cfb92/Logo/BHM_Logo_Secondary_128.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/2600/b97c9e81-9f9b-4360-967b-f2b16c9cfb92/Frame/BHM_Frame.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1530/b3dbea67-f5a3-4f67-972b-0917d63176a7/Players/JoshJobe.png
https://eaassets-a.akamaihd.net/gameplayservices/prod/Madden/2026/images/1530/b3dbea67-f5a3-4f67-972b-0917d63176a7/Logo/AutumnClassic_Logo_128.png

## LOGIN PROCESS   -- 

https://wal2.tools.gos.bio-iad.ea.com/wal/authentication/login
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=?offset=0&count=99
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=?offset=0&count=99
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=?offset=0&count=99
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=?offset=0&count=99
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=
https://wal2.tools.gos.bio-iad.ea.com/wal/mca/Process/000006b24f21a5ec_FzoUHDP6RI6rk53AjLkhu86SosBAc4Sd2GV7SVTNu$w=


We already know from your M26 capture that the Companion App was basically a client for EA's MUT backend, and the important part wasn't the app itself.

We found:

wal2.tools.gos.bio-iad.ea.com
        ↓
/wal/mca/Process/{sessionKey}
        ↓
Mobile_SearchAuctions
        ↓
auction results

For M27, we need to discover what M27's client is sending to the same backend architecture.

Option 1 — Capture M27 itself ⭐

This is the best option right now.

You don't need the Companion App.

Use Charles on the platform where you play M27 and capture traffic while doing:

Madden 27
   ↓
Ultimate Team
   ↓
Auction House
   ↓
Search player
   ↓
Results populate

Then look for the EA service traffic.

We're specifically hunting for something analogous to:

Mobile_SearchAuctions
Mobile_GetItemAuctionSales
Mobile_GetPostedAuctions

It might be the same command names, or EA may have changed them.

If the game communicates through a different service/version, that's fine — that's exactly what the capture will reveal.

Option 2 — M27 Companion App traffic

There's an important correction to my previous statement.


But here's the really useful part

EA explicitly says M27's Auction House exists and had Auction House fixes at launch:

filtering
bidding feedback
item navigation

Therefore the M27 Auction House backend definitely exists.


We need to capture the M27 client talking to that backend.

What I want you to do

Since you already have Charles working, this is straightforward.

Capture this exact sequence:
START CHARLES
        ↓
Start recording
        ↓
Launch Madden 27
        ↓
Enter Ultimate Team
        ↓
Auction House
        ↓
Search for ANY player
        ↓
Wait for listings
        ↓
Open one of the cards
        ↓
Stop recording
        ↓
Save .chlz

Don't filter the capture down to just one EA hostname yet.

Give me the complete .chlz.

Then I can compare the M27 traffic against the M26 capture we already have.

What we're looking for

I'll specifically search the M27 capture for:

auction
Auction
SearchAuctions
GetItemAuctionSales
GetPostedAuctions
GetAuction
Mobile_
MCA
wal
gos
blaze

Then establish:

M27 host
      ↓
M27 endpoint
      ↓
authentication/session
      ↓
command
      ↓
request parameters
      ↓
card/player identifier
      ↓
auction listings
      ↓
current bid
      ↓
buyout
      ↓
recent sales
And then we can build your market-price collector

Something like:

M27 EA API
     │
     ├── player/card lookup
     │
     ├── auction search
     │
     ├── active listings
     │
     └── recent sales
             │
             ▼
       SHiESTY MUT Market
             │
             ├── lowest BIN
             ├── average BIN
             ├── median sale
             ├── recent sale
             ├── number of listings
             └── price history

The key is: don't try to invent the M27 URL from the M26 URL. We now know the correct methodology from your capture. We capture the real M27 request and extract the endpoint/command from it.

And because M27's Auction House is explicitly live, this is something we can investigate right now, not something that requires waiting for EA to publish an API.

on my xbox im on the same wifi as we speak

Perfect. That is exactly what we need. 🔥

If your Xbox and computer are on the same Wi-Fi, we can capture the actual Madden 27 Xbox traffic instead of relying on the old Companion App.

Do this on your computer

If you're using Charles Proxy like with your .chlz captures:

Open Charles.
Make sure Recording is ON.
Find your computer's local IP:
macOS: System Settings → Wi-Fi → Details
You'll see something like 192.168.1.25.

In Charles, check Proxy → Proxy Settings and note the HTTP proxy port, usually:

8888
Your Xbox needs to send its traffic through that computer as the proxy.
Xbox network settings

On Xbox:

Settings → General → Network settings → Advanced settings → IP settings

Get the Xbox's IP address first.

Then the important limitation:

Xbox does not give you a normal system-wide HTTP proxy setting in the same way a phone/browser does.

So don't waste time looking for a simple:

Proxy Server: 192.168.1.25
Port: 8888

setting in the Xbox network menu.

Better approach: capture at the network level

Because you're on the same LAN, we can instead use your computer as the interception point if your router/network setup allows it, or use a device/router capable of transparent capture.

For the quickest test, though, let's first see whether Charles is already seeing the Xbox traffic.

Launch Madden 27 on the Xbox → enter MUT → Auction House → search for a player → wait for the listings.

Then look at Charles.

Search/filter for:

ea.com
ea
gos
wal
madden
auction

If you see new EA requests appearing at the exact moment you search the Auction House, we're in business.

Don't send me the whole capture yet

First tell me what hostnames appear in Charles when you perform the Auction House search.

If you see something like:

wal2.tools.gos....

or another EA host, give me the hostname/path you see.

Then we'll trace M27 → Auction House → request → response → price data from the Xbox itself.