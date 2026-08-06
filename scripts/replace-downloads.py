#!/usr/bin/env python3
"""Replace download sections in Chinese Library pages with LibraryDownloadWidget.
Uses exact text matching for each file's unique structure."""

import os

BASE = '/Users/mac/.qclaw/workspace/dwac-website/src/app'
WIDGET = '\n        {/* Downloads — Limited-Time Free Access */}\n        <LibraryDownloadWidget />\n\n'
IMPORT = "import LibraryDownloadWidget from '@/components/library/LibraryDownloadWidget'\n"

FILES = {
    # ===== ZH-CN Vol 1 =====
    f'{BASE}/zh-cn/library/book/vol1/page.tsx': {
        'import_after': "import type { Metadata } from 'next'",
        'replace': (
            '\n        <div className="flex items-center gap-3 mb-8">\n'
            '          <h2 className="font-serif text-2xl font-bold text-navy-800">下载</h2>\n'
            '          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">免费</span>\n'
            '        </div>\n'
            '\n'
            '        <div className="grid md:grid-cols-2 gap-6 mb-12">\n'
            '          {[\n'
            "            { lang: 'English', files: ['V1-EN-v8.epub', 'V1-EN-v8.md'], emoji: '🇬🇧' },\n"
            "            { lang: '中文', files: ['V1-CN-v25.epub', 'V1-CN-v25.md'], emoji: '🇨🇳' },\n"
            '          ].map(({ lang, files, emoji }) => (\n'
            '            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">\n'
            "              <h2 className=\"font-serif text-xl font-bold text-navy-800 mb-4\">{emoji} {lang === 'English' ? '英文版' : '中文版'}</h2>\n"
            '              <div className="space-y-3">\n'
            '                {files.map((f) => {\n'
            "                  const ext = f.split('.').pop()!.toUpperCase()\n"
            "                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }\n"
            '                  return (\n'
            '                    <a key={f} href={`/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-${f}`} download\n'
            '                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group">\n'
            '                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">\n'
            "                        {icons[ext] || '📄'} {ext} 格式\n"
            '                      </span>\n'
            '                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">下载 ↓</span>\n'
            '                    </a>\n'
            '                  )\n'
            '                })}\n'
            '              </div>\n'
            '            </div>\n'
            '          ))}\n'
            '        </div>',
            WIDGET
        )
    },
    # ===== ZH-CN Vol 2 =====
    f'{BASE}/zh-cn/library/book/vol2/page.tsx': {
        'import_after': "import type { Metadata } from 'next'",
        'replace': (
            '\n        <div className="flex items-center gap-3 mb-8">\n'
            '          <h2 className="font-serif text-2xl font-bold text-navy-800">下载</h2>\n'
            '          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">免费</span>\n'
            '        </div>\n'
            '\n'
            '        <div className="grid md:grid-cols-2 gap-6 mb-12">\n'
            '          {[\n'
            "            { lang: 'English', files: ['V2_Publication-EN-v12.epub', 'V2_Publication-EN-v12.md'], emoji: '🇬🇧' },\n"
            "            { lang: '中文', files: ['V2_Complete-CN_Final-v33.epub', 'V2_Complete-CN_Final-v33.md'], emoji: '🇨🇳' },\n"
            '          ].map(({ lang, files, emoji }) => (\n'
            '            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">\n'
            "              <h2 className=\"font-serif text-xl font-bold text-navy-800 mb-4\">{emoji} {lang === 'English' ? '英文版' : '中文版'}</h2>\n"
            '              <div className="space-y-3">\n'
            '                {files.map((f) => {\n'
            "                  const ext = f.split('.').pop()!.toUpperCase()\n"
            "                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }\n"
            '                  return (\n'
            '                    <a key={f} href={`/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-${f}`} download\n'
            '                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group">\n'
            '                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">\n'
            "                        {icons[ext] || '📄'} {ext} 格式\n"
            '                      </span>\n'
            '                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">下载 ↓</span>\n'
            '                    </a>\n'
            '                  )\n'
            '                })}\n'
            '              </div>\n'
            '            </div>\n'
            '          ))}\n'
            '        </div>',
            WIDGET
        )
    },
    # ===== ZH-TW Vol 1 =====
    f'{BASE}/zh-tw/library/book/vol1/page.tsx': {
        'import_after': "import type { Metadata } from 'next'",
        'replace': (
            '\n        <div className="flex items-center gap-3 mb-8">\n'
            '          <h2 className="font-serif text-2xl font-bold text-navy-800">下載</h2>\n'
            '          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">免費</span>\n'
            '        </div>\n'
            '\n'
            '        <div className="grid md:grid-cols-2 gap-6 mb-12">\n'
            '          {[\n'
            "            { lang: 'English', files: ['V1-EN-v8.epub', 'V1-EN-v8.md'], emoji: '🇬🇧' },\n"
            "            { lang: '中文', files: ['V1-CN-v25.epub', 'V1-CN-v25.md'], emoji: '🇨🇳' },\n"
            '          ].map(({ lang, files, emoji }) => (\n'
            '            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">\n'
            "              <h2 className=\"font-serif text-xl font-bold text-navy-800 mb-4\">{emoji} {lang === 'English' ? '英文版' : '中文版'}</h2>\n"
            '              <div className="space-y-3">\n'
            '                {files.map((f) => {\n'
            "                  const ext = f.split('.').pop()!.toUpperCase()\n"
            "                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }\n"
            '                  return (\n'
            '                    <a key={f} href={`/gclc-downloads/vol-i/Global-Cyber-Law-Compendium-${f}`} download\n'
            '                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group">\n'
            '                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">\n'
            "                        {icons[ext] || '📄'} {ext} 格式\n"
            '                      </span>\n'
            '                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">下載 ↓</span>\n'
            '                    </a>\n'
            '                  )\n'
            '                })}\n'
            '              </div>\n'
            '            </div>\n'
            '          ))}\n'
            '        </div>',
            WIDGET
        )
    },
    # ===== ZH-TW Vol 2 =====
    f'{BASE}/zh-tw/library/book/vol2/page.tsx': {
        'import_after': "import type { Metadata } from 'next'",
        'replace': (
            '\n        <div className="flex items-center gap-3 mb-8">\n'
            '          <h2 className="font-serif text-2xl font-bold text-navy-800">下載</h2>\n'
            '          <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">免費</span>\n'
            '        </div>\n'
            '\n'
            '        <div className="grid md:grid-cols-2 gap-6 mb-12">\n'
            '          {[\n'
            "            { lang: 'English', files: ['V2_Publication-EN-v12.epub', 'V2_Publication-EN-v12.md'], emoji: '🇬🇧' },\n"
            "            { lang: '中文', files: ['V2_Complete-CN_Final-v33.epub', 'V2_Complete-CN_Final-v33.md'], emoji: '🇨🇳' },\n"
            '          ].map(({ lang, files, emoji }) => (\n'
            '            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">\n'
            "              <h2 className=\"font-serif text-xl font-bold text-navy-800 mb-4\">{emoji} {lang === 'English' ? '英文版' : '中文版'}</h2>\n"
            '              <div className="space-y-3">\n'
            '                {files.map((f) => {\n'
            "                  const ext = f.split('.').pop()!.toUpperCase()\n"
            "                  const icons: Record<string, string> = { EPUB: '📖', MD: '📝' }\n"
            '                  return (\n'
            '                    <a key={f} href={`/gclc-downloads/vol-ii/Global-Cyber-Law-Compendium-${f}`} download\n'
            '                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group">\n'
            '                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">\n'
            "                        {icons[ext] || '📄'} {ext} 格式\n"
            '                      </span>\n'
            '                      <span className="text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">下載 ↓</span>\n'
            '                    </a>\n'
            '                  )\n'
            '                })}\n'
            '              </div>\n'
            '            </div>\n'
            '          ))}\n'
            '        </div>',
            WIDGET
        )
    },
}

# Now Vol 3 & 4 (ZH-CN & ZH-TW) — these have a different structure with Download Cards section
# Vol 3: from <div className="grid md:grid-cols-2 gap-6 mb-12"> to </div> before <div className="bg-white...关于本卷
# Vol 4: from <div className="bg-white rounded-xl p-6... max-w-md mx-auto"> to </div> before <div className="bg-white...关于本卷

# For vol3 ZH-CN/TW: match from "<div className=\"grid md:grid-cols-2 gap-6 mb-12\">" through the closing </div> of that grid
# followed by the next <div className="bg-white..."> being the "about" section

for lang_dir, about_heading in [('zh-cn', '关于本卷'), ('zh-tw', '關於本卷')]:
    for vol in ['3', '4']:
        path = f'{BASE}/{lang_dir}/library/book/vol{vol}/page.tsx'
        if vol == '3':
            # Find the download grid and replace it + the gclcBase const that precedes it
            FILES[path] = {
                'import_after': "import type { Metadata } from 'next'",
                'replace': (
                    '\n        <div className="grid md:grid-cols-2 gap-6 mb-12">\n'
                    '          {[\n'
                    "            { lang: 'English', files: ['v2.2-EN.epub', 'v2.2-EN.md'], emoji: '🇬🇧' },\n"
                    "            { lang: '中文', files: ['v2.2-CN.epub', 'v2.2-CN.md'], emoji: '🇨🇳' },\n"
                    '          ].map(({ lang, files, emoji }) => (\n'
                    '            <div key={lang} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">\n'
                    "              <h2 className=\"font-serif text-xl font-bold text-navy-800 mb-4\">{emoji} {lang} 版</h2>\n"
                    '              <div className="space-y-3">\n'
                    '                {files.map((f) => {\n'
                    "                  const [fmt] = f.split('.').slice(-1).map(x => x.toUpperCase())\n"
                    "                  const icons: Record<string, string> = { EPUB: '📖', HTML: '🌐', MD: '📝' }\n"
                    '                  return (\n'
                    '                    <a\n'
                    '                      key={f}\n'
                    '                      href={`${gclcBase}-${f}`}\n'
                    '                      download\n'
                    '                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gold-50 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors group"\n'
                    '                    >\n'
                    '                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-navy-800">\n'
                    "                        {icons[fmt] || '📄'} {fmt} 格式\n"
                    '                      </span>\n',
                    WIDGET
                ),
                'extra_remove': f'\n        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">\n          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">{about_heading}'
            }
        elif vol == '4':
            FILES[path] = {
                'import_after': "import type { Metadata } from 'next'",
                'replace': (
                    '\n        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-12 max-w-md mx-auto">\n'
                    '          <h2 className="font-serif text-xl font-bold text-navy-800 mb-4 text-center">下载</h2>\n'
                    if lang_dir == 'zh-cn' else
                    '\n        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-12 max-w-md mx-auto">\n'
                    '          <h2 className="font-serif text-xl font-bold text-navy-800 mb-4 text-center">下載</h2>\n',
                    WIDGET
                ),
            }

def process(path, info):
    with open(path) as f:
        content = f.read()
    original = content
    
    # Add 'use client'
    if "'use client'" not in content[:200]:
        content = "'use client'\n\n" + content
    
    # Add import
    if 'LibraryDownloadWidget' not in content[:600]:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == info['import_after'].strip():
                lines.insert(i + 1, IMPORT.rstrip('\n'))
                break
        content = '\n'.join(lines)
    
    # Replace
    old_text, new_text = info['replace']
    if old_text in content:
        content = content.replace(old_text, new_text, 1)
    else:
        print(f'WARN: replace text not found in {path.split("/app/")[1]}')
        # Show what's around where we expect it
        idx = content.find('gclc-downloads')
        if idx >= 0:
            print(f'  "gclc-downloads" found at offset {idx}')
            print(f'  context: ...{content[max(0,idx-50):idx+100]}...')
        return False
    
    # Extra removal for vol3
    if 'extra_remove' in info:
        marker = info['extra_remove']
        if info['extra_remove'] in content:
            # Content from "extra_remove" through the end of the about section + the open access box
            content = content.replace(marker, WIDGET.rstrip('\n') + '\n\n        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">\n          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">' + marker.split('>')[1].strip())
    
    if content != original:
        with open(path, 'w') as f:
            f.write(content)
        print(f'OK: {path.split("/app/")[1]}')
    else:
        print(f'SKIP: {path.split("/app/")[1]}')
    return True

for path, info in FILES.items():
    process(path, info)

print('\nDone.')
