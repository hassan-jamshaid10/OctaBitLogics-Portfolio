import os

components_dir = r'd:\OctaBitLogics-Portfolio\src\components'

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            lines = content.split('\n')
            
            # Find the index of "use client"; and import React from "react";
            use_client_idx = -1
            import_react_idx = -1
            
            for i, line in enumerate(lines):
                if '"use client";' in line or "'use client';" in line:
                    use_client_idx = i
                if 'import React from "react";' in line:
                    import_react_idx = i
                    
            if use_client_idx > 0 and import_react_idx == 0:
                # swap them
                lines[import_react_idx], lines[use_client_idx] = lines[use_client_idx], lines[import_react_idx]
                with open(path, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(lines))
                print(f"Fixed {file}")
