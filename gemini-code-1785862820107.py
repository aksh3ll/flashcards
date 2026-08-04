from PIL import Image

img = Image.open('playing_card_kanji.png').convert('RGBA')

# Create individual resized images
img16 = img.resize((16, 16), Image.Resampling.LANCZOS)
img32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img64 = img.resize((64, 64), Image.Resampling.LANCZOS)

ico_path = 'playing_card_kanji.ico'

# Save with sizes parameter or using append_images
img.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (64, 64)])

# Verify frames again
ico_check = Image.open(ico_path)
frames = []
try:
    while True:
        frames.append(ico_check.size)
        ico_check.seek(ico_check.tell() + 1)
except EOFError:
    pass

print("Frames with sizes parameter:", frames)

# If sizes parameter doesn't produce multiple frames in Pillow, let's check Pillow docs for ICO:
# Actually Pillow's ICO plugin uses `sizes` parameter in `save()`, but `Image.open` on ICO only reads the best frame by default unless navigated.