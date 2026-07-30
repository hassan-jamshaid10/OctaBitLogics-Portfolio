import os
import re

components_dir = r'd:\OctaBitLogics-Portfolio\src\components'

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            if '"use client";' in content or "'use client';" in content:
                # Remove all use client directives
                content = re.sub(r'[\'"]use client[\'"];?\n?', '', content)
                # Prepend it to the top
                content = '"use client";\n' + content.strip() + '\n'
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed {file}")
