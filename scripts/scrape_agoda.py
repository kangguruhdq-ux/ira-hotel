import urllib.request
import re

url = "https://www.agoda.com/hotel-iraa-yogyakarta/hotel/yogyakarta-id.html"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=15) as r:
        content = r.read().decode("utf-8", errors="ignore")
        photos = re.findall(r'https://[a-zA-Z0-9_.-]*agoda\.net/hotelImages/[^"\'\s]+', content)
        print("Agoda photos found:", len(photos))
        seen = set()
        for p in photos:
            # clean url
            p_clean = p.split('\\')[0].split('"')[0]
            if p_clean not in seen and ("jpg" in p_clean or "jpeg" in p_clean or "png" in p_clean):
                seen.add(p_clean)
                print("Agoda photo:", p_clean)
                if len(seen) >= 8:
                    break
except Exception as e:
    print("Agoda error:", e)
