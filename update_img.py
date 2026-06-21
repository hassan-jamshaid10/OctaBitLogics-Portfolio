import base64

with open('public/octabit-logo-transparent.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

with open('public/coming-soon-post.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('"octabit-logo-transparent.png"', f'"data:image/png;base64,{b64}"')

with open('public/coming-soon-post.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done")
