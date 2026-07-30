import os
import re

components_dir = r'd:\OctaBitLogics-Portfolio\src\components'

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Only do it if not already memoized in some way (heuristic)
            if 'export default memo(' in content or 'export default React.memo(' in content:
                continue
                
            # Regex to find export default function Name(...) {
            match = re.search(r'^export default function\s+([A-Za-z0-9_]+)\s*\((.*?)\)\s*\{', content, re.MULTILINE)
            if match:
                func_name = match.group(1)
                
                # Replace export default function with const Name = React.memo(function Name(...) {
                new_content = content[:match.start()] + f'const {func_name} = React.memo(function {func_name}({match.group(2)}) {{' + content[match.end():]
                
                # If React is not imported, add it
                if 'import React' not in new_content and 'import * as React' not in new_content:
                    # we just assume React is available, or we import it
                    if 'from "react"' in new_content:
                        new_content = new_content.replace('from "react"', ', React from "react"')
                        new_content = new_content.replace('import ,', 'import')
                    else:
                        new_content = 'import React from "react";\n' + new_content
                
                # find the matching closing brace (rough heuristic: last closing brace at start of line)
                # Actually, many files end with   ); \n } 
                # Let's use regex to replace the last }
                last_brace_match = list(re.finditer(r'^\}\s*$', new_content, re.MULTILINE))
                if last_brace_match:
                    last_brace = last_brace_match[-1]
                    new_content = new_content[:last_brace.start()] + '});\n\nexport default ' + func_name + ';' + new_content[last_brace.end():]
                    
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Memoized {file}")
