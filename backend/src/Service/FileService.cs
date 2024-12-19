namespace dating_app_backend.src.Service {
    public class FileService
    {
        private readonly string _uploadFolder;
        private readonly string _uploadFolder2;
      
        public FileService()
        {
            _uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Upload/images");
            _uploadFolder2 = Path.Combine(Directory.GetCurrentDirectory(), "Upload/Posts");
            if (!Directory.Exists(_uploadFolder))
            {
                Directory.CreateDirectory(_uploadFolder);
            }

            if (!Directory.Exists(_uploadFolder2))
            {
                Directory.CreateDirectory(_uploadFolder2);
            }
        }

        public async Task<string> SaveFileAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                throw new ArgumentException("File is invalid.");
            }

                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                var filePath = Path.Combine(_uploadFolder, fileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

            return $"/Upload/images/{fileName}";
        }

        public async Task<string> SavePostAsync(IFormFile file)
        {

            if (file == null || file.Length == 0 )
            {
                throw new ArgumentException("File is invalid.");
            }
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(_uploadFolder2, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return $"/Upload/Posts/{fileName}";
            
        }
    }
}