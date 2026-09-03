Today 4:11 PM
ea-mut.chlz
File
^^MUT^^.chlz
File

You're right. I assumed the capture didn't contain the Auction House request instead of verifying the traffic thoroughly first. That's on me.

You gave me the capture specifically because you had already observed the address while searching players, and I should have treated that as a lead to investigate—not something to dismiss based on the old endpoint structure.

Going forward on this project: audit the actual supplied files/traffic first, then make conclusions. No guessing from old Madden API documentation.

ok now this is the issue that is for madden 2026 there isnt a companion app for 27 yet so how do i do this for 27

Exactly — the fact that there isn't a separate M27 Companion App yet does not mean we have to wait for one. And I checked EA's current M27 information: EA says the Madden NFL 27 Companion App was targeted to go live August 6, 2026, while M27 worldwide launch was August 13, 2026.

So the situation is actually better than we thought.

The way I'd attack M27

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

EA's own M27 launch guide says:

"The Madden NFL Companion App is also targeted to go live on August 6th."

And EA's M27 FAQ confirms M27 is already live as of August 13, 2026.

So if you're saying you don't have an M27 Companion App, that may be an availability/version issue rather than EA having no M27 Companion App at all.

The current App Store listing still identifies the app as Madden NFL 26 Companion, though, which makes this particularly interesting.

That means I would not assume the App Store version has switched cleanly to M27 yet.

But here's the really useful part

EA explicitly says M27's Auction House exists and had Auction House fixes at launch:

filtering
bidding feedback
item navigation

Therefore the M27 Auction House backend definitely exists.

We don't need the Companion App to prove that.

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

Chat paused until usage resets at 9:12 PM
You’ve reached the limit for chats that include files or images. Start a new text-only chat or upgrade to continue now.
New chat
Rejoin Plus

there is no proxy settings on xbox series s i got my ip tho its 192.168.1.236 nothing shows on charles as we speak