import urllib.request
import re
import os

url = "https://www.trip.com/hotels/yogyakarta-hotel-detail-106173009/hotel-iraa/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})

os.makedirs("public/images/hero", exist_ok=True)

try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
        # Find images on dimg*.tripcdn.com
        matches = re.findall(r'https://dimg\d*\.tripcdn\.com/images/[a-zA-Z0-9_-]+\.(?:jpg|jpeg|png|webp)', html)
        print("Matches found:", len(matches))
        seen = set()
        count = 0
        for m in matches:
            if m not in seen and "200R" not in m:
                seen.add(m)
                print("Image:", m)
                count += 1
                if count >= 8:
                    break
except Exception as e:
    print("Fetch error:", e)
