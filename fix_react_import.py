import os
import re

components_dir = r'd:\OctaBitLogics-Portfolio\src\components'

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            # Fix import { ... } , React from "react";
            # by replacing } , React from "react" with } and adding import React from "react"; at the top
            
            # Find the bad imports
            if '} , React from "react"' in new_content:
                new_content = new_content.replace('} , React from "react"', '} from "react"')
                # we also need to ensure React is imported
                if 'import React' not in new_content:
                    lines = new_content.split('\n')
                    # insert after use client
                    for i, line in enumerate(lines):
                        if '"use client";' in line:
                            lines.insert(i + 1, 'import React from "react";')
                            break
                    new_content = '\n'.join(lines)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
