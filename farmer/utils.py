import base64
from django.core.files.base import ContentFile
import os

def save_base64_image(decoded_data, filename, media_root='media/images/'):
  """
  Saves a decoded base64 image to the specified media directory.

  Args:
      decoded_data (bytes): Decoded base64 image data.
      filename (str): Name of the image file.
      media_root (str, optional): Base directory for media files. Defaults to 'media/images/'.

  Returns:
      str: Path to the saved image file.
  """
  image_file = ContentFile(decoded_data, name=filename)
  with open(os.path.join(media_root, filename), 'wb+') as f:
    f.write(image_file.read())
  return os.path.join(MEDIA_ROOT, filename)

def decode_base64_image(encoded_image_data):
  # Assuming the encoded_image_data is retrieved from the serializer
  decoded_data = base64.b64decode(encoded_image_data)
  return decoded_data

