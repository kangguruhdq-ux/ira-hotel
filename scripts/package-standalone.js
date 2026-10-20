const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Standalone Packaging for cPanel...');

const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, '.next', 'standalone');
const nextStaticDir = path.join(rootDir, '.next', 'static');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(standaloneDir)) {
  console.error('❌ Error: .next/standalone not found. Please run "npm run build" first.');
  process.exit(1);
}

// 1. Copy public folder to .next/standalone/public
console.log('📦 Copying public/ to .next/standalone/public...');
const destPublicDir = path.join(standaloneDir, 'public');
fs.cpSync(publicDir, destPublicDir, { recursive: true });

// 2. Copy .next/static to .next/standalone/.next/static
console.log('📦 Copying .next/static to .next/standalone/.next/static...');
const destStaticDir = path.join(standaloneDir, '.next', 'static');
fs.cpSync(nextStaticDir, destStaticDir, { recursive: true });

// 3. Create app.js in .next/standalone as cPanel entrypoint fallback
console.log('📄 Creating app.js entrypoint wrapper...');
const appJsContent = `// cPanel Entrypoint wrapper for Next.js Standalone Server
// Some cPanel configurations look for app.js by default.
require('./server.js');
`;
fs.writeFileSync(path.join(standaloneDir, 'app.js'), appJsContent, 'utf8');

// 4. Create sample .env for cPanel Node.js App
console.log('📄 Creating .env in standalone directory...');
const envContent = `# Iraa Hotel Environment Variables for cPanel
PORT=3000
NODE_ENV=production
NEXT_PUBLIC_HOTEL_WHATSAPP=6281929036888
NEXT_PUBLIC_SITE_URL=https://iraahotel.com
`;
fs.writeFileSync(path.join(standaloneDir, '.env'), envContent, 'utf8');

// 5. Copy .htaccess if present
const htaccessPath = path.join(rootDir, '.htaccess');
if (fs.existsSync(htaccessPath)) {
  console.log('📄 Copying .htaccess to standalone directory...');
  fs.copyFileSync(htaccessPath, path.join(standaloneDir, '.htaccess'));
}

// 6. Compress with forward slashes for Linux cPanel compatibility
try {
  console.log('📦 Compressing cpanel-standalone.zip and cpanel-standalone.tar.gz...');
  execSync('tar.exe -a -c -f ../../cpanel-standalone.zip * .env .next .htaccess', { cwd: standaloneDir });
  execSync('tar.exe -czf ../../cpanel-standalone.tar.gz * .env .next .htaccess', { cwd: standaloneDir });
  console.log('🎉 Successfully created cpanel-standalone.zip and cpanel-standalone.tar.gz!');
} catch (err) {
  console.warn('⚠️ Warning: Could not automatically compress with tar.exe:', err.message);
}

console.log('✅ Standalone directory is fully prepared at .next/standalone');
