# 360° Panoramic Images for VR Viewer

This directory contains the 360-degree panoramic images used in the Virtual Reality tour.

## Required Images

Please add the following equirectangular panoramic images (2:1 aspect ratio):

### Full Panoramas (360° Views)

- **living-room-360.jpg** - Equirectangular panorama of modern living room (recommended: 4096x2048px or 8192x4096px)
- **bedroom-360.jpg** - Equirectangular panorama of luxury bedroom (recommended: 4096x2048px or 8192x4096px)
- **kitchen-360.jpg** - Equirectangular panorama of contemporary kitchen (recommended: 4096x2048px or 8192x4096px)

### Thumbnail Images (for scene selector)

- **living-room-thumb.jpg** - Preview thumbnail (recommended: 320x200px)
- **bedroom-thumb.jpg** - Preview thumbnail (recommended: 320x200px)
- **kitchen-thumb.jpg** - Preview thumbnail (recommended: 320x200px)

## Image Requirements

1. **Format**: JPEG or PNG
2. **Projection**: Equirectangular (360° x 180°)
3. **Aspect Ratio**: 2:1 (width is twice the height)
4. **Recommended Resolutions**:
   - High Quality: 8192x4096px
   - Medium Quality: 4096x2048px
   - Low Quality: 2048x1024px

## How to Create 360° Panoramas

You can create equirectangular panoramas using:

- **3D Software**: Render equirectangular camera in software like 3ds Max, Blender, V-Ray, or Corona Renderer
- **Photo Stitching**: Use tools like Hugin or PTGui to stitch multiple photos
- **360° Cameras**: Use a 360° camera like Ricoh Theta, Insta360, or GoPro MAX

## Testing

Once images are added, the VR viewer will automatically load them. You can test by:

1. Navigating to `/virtual-reality` page
2. Dragging to look around
3. Using zoom controls
4. Switching between scenes using the thumbnails

## Notes

- Larger images provide better quality but slower loading times
- For web use, 4096x2048px provides a good balance
- Compress images to reduce file size without significant quality loss
- Consider using progressive JPEG for faster loading
