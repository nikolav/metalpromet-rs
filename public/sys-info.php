<?php
// Advanced System Info Page - Dark Mode with Grouped Information
// Displays comprehensive server, PHP, database, and security details with emoji indicators
// No shell_exec() usage - safe for shared hosting environments

// Helper function to format bytes
function formatBytes($bytes, $precision = 2)
{
  $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  $bytes = max($bytes, 0);
  $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
  $pow = min($pow, count($units) - 1);
  $bytes /= pow(1024, $pow);
  return round($bytes, $precision) . ' ' . $units[$pow];
}

// Helper to check if function exists and return value or N/A
function getIfExists($function, $default = 'N/A')
{
  return function_exists($function) ? $function() : $default;
}

// Helper to get ini value with fallback
function getIni($key, $default = 'N/A')
{
  $val = ini_get($key);
  return $val !== false && $val !== '' ? $val : $default;
}

// Safe CPU core detection (without shell_exec)
function getCpuCores()
{
  if (function_exists('num_cpus')) {
    return num_cpus();
  }
  // Try to read from /proc/cpuinfo if available
  if (is_readable('/proc/cpuinfo')) {
    $cpuinfo = @file_get_contents('/proc/cpuinfo');
    if ($cpuinfo !== false) {
      preg_match_all('/^processor\s*:\s*[0-9]+/m', $cpuinfo, $matches);
      return count($matches[0]);
    }
  }
  return 'N/A';
}

// Safe load average (without shell_exec)
function getLoadAvg()
{
  if (function_exists('sys_getloadavg')) {
    $load = sys_getloadavg();
    if ($load !== false) {
      return implode(' ', array_map(function ($v) {
        return number_format($v, 2);
      }, $load));
    }
  }
  return 'N/A';
}

// Advanced system information gathering
$sysInfo = [
  'server' => [
    'icon' => '🌐',
    'title' => 'Server Environment',
    'data' => [
      'Software' => $_SERVER['SERVER_SOFTWARE'] ?? 'N/A',
      'Name' => $_SERVER['SERVER_NAME'] ?? 'N/A',
      'Address' => $_SERVER['SERVER_ADDR'] ?? 'N/A',
      'Port' => $_SERVER['SERVER_PORT'] ?? 'N/A',
      'Protocol' => $_SERVER['SERVER_PROTOCOL'] ?? 'N/A',
      'Document Root' => $_SERVER['DOCUMENT_ROOT'] ?? 'N/A',
      'Virtual Host' => $_SERVER['HTTP_HOST'] ?? 'N/A',
      'Remote Address' => $_SERVER['REMOTE_ADDR'] ?? 'N/A',
      'Request Method' => $_SERVER['REQUEST_METHOD'] ?? 'N/A',
      'HTTPS' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? '✅ Enabled' : '❌ Disabled',
    ]
  ],
  'php' => [
    'icon' => '🐘',
    'title' => 'PHP Configuration',
    'data' => [
      'Version' => phpversion(),
      'SAPI' => php_sapi_name(),
      'Zend Version' => zend_version(),
      'Memory Limit' => getIni('memory_limit'),
      'Max Execution Time' => getIni('max_execution_time') . ' sec',
      'Max Input Time' => getIni('max_input_time') . ' sec',
      'Upload Max Size' => getIni('upload_max_filesize'),
      'Post Max Size' => getIni('post_max_size'),
      'Max File Uploads' => getIni('max_file_uploads'),
      'Display Errors' => getIni('display_errors') ? '✅ On' : '❌ Off',
      'Error Reporting' => getIni('error_reporting'),
      'Allow URL Fopen' => getIni('allow_url_fopen') ? '✅ Yes' : '❌ No',
      'OpenSSL' => extension_loaded('openssl') ? '✅ Available' : '❌ Missing',
      'cURL' => extension_loaded('curl') ? '✅ Available' : '❌ Missing',
      'GD Library' => extension_loaded('gd') ? '✅ Available' : '❌ Missing',
    ]
  ],
  'database' => [
    'icon' => '🗄️',
    'title' => 'Database Support',
    'data' => [
      'MySQLi' => extension_loaded('mysqli') ? '✅ Available' : '❌ Missing',
      'PDO' => extension_loaded('pdo') ? '✅ Available' : '❌ Missing',
      'PDO MySQL' => extension_loaded('pdo_mysql') ? '✅ Available' : '❌ Missing',
      'PDO PostgreSQL' => extension_loaded('pdo_pgsql') ? '✅ Available' : '❌ Missing',
      'PDO SQLite' => extension_loaded('pdo_sqlite') ? '✅ Available' : '❌ Missing',
      'PostgreSQL' => extension_loaded('pgsql') ? '✅ Available' : '❌ Missing',
      'SQLite3' => extension_loaded('sqlite3') ? '✅ Available' : '❌ Missing',
      'MongoDB' => extension_loaded('mongodb') ? '✅ Available' : '❌ Missing',
      'Redis' => extension_loaded('redis') ? '✅ Available' : '❌ Missing',
    ]
  ],
  'performance' => [
    'icon' => '⚡',
    'title' => 'Performance & Resources',
    'data' => [
      'CPU Cores' => getCpuCores(),
      'PHP Memory Usage' => function_exists('memory_get_usage') ? formatBytes(memory_get_usage()) : 'N/A',
      'Memory Peak Usage' => function_exists('memory_get_peak_usage') ? formatBytes(memory_get_peak_usage()) : 'N/A',
      'Real Memory Usage' => function_exists('memory_get_usage') ? formatBytes(memory_get_usage(true)) : 'N/A',
      'Load Average' => getLoadAvg(),
      'OPcache Enabled' => extension_loaded('Zend OPcache') ? '✅ Yes' : '❌ No',
      'OPcache Memory' => extension_loaded('Zend OPcache') ? formatBytes((int)ini_get('opcache.memory_consumption') * 1024 * 1024) : 'N/A',
      'OPcache Max Files' => extension_loaded('Zend OPcache') ? ini_get('opcache.max_accelerated_files') : 'N/A',
    ]
  ],
  'security' => [
    'icon' => '🔒',
    'title' => 'Security & Extensions',
    'data' => [
      'PHP Version Status' => version_compare(phpversion(), '8.0', '>=') ? '✅ Up to date (≥8.0)' : '⚠️ Old version (<8.0)',
      'SSL/TLS Available' => extension_loaded('openssl') ? '✅ Available' : '❌ Missing',
      'Sodium Available' => extension_loaded('sodium') ? '✅ Available' : '❌ Missing',
      'ZIP Available' => extension_loaded('zip') ? '✅ Available' : '❌ Missing',
      'Exif Available' => extension_loaded('exif') ? '✅ Available' : '❌ Missing',
      'FileInfo Available' => extension_loaded('fileinfo') ? '✅ Available' : '❌ Missing',
      'JSON Available' => extension_loaded('json') ? '✅ Available' : '❌ Missing',
      'XML Available' => extension_loaded('xml') ? '✅ Available' : '❌ Missing',
      'MBString Available' => extension_loaded('mbstring') ? '✅ Available' : '❌ Missing',
      'PCRE Available' => extension_loaded('pcre') ? '✅ Available' : '❌ Missing',
      'Session Available' => extension_loaded('session') ? '✅ Available' : '❌ Missing',
      'Tokenizer Available' => extension_loaded('tokenizer') ? '✅ Available' : '❌ Missing',
    ]
  ],
  'system' => [
    'icon' => '💻',
    'title' => 'System Resources',
    'data' => [
      'Operating System' => PHP_OS . ' (' . @php_uname('r') . ')',
      'Host Name' => @php_uname('n'),
      'Server Time' => date('Y-m-d H:i:s'),
      'Timezone' => date_default_timezone_get(),
      'Total Disk Space' => function_exists('disk_total_space') ? formatBytes(@disk_total_space('.')) : 'N/A',
      'Free Disk Space' => function_exists('disk_free_space') ? formatBytes(@disk_free_space('.')) : 'N/A',
      'Used Disk Space' => (function_exists('disk_total_space') && function_exists('disk_free_space') && @disk_total_space('.') > 0) ?
        formatBytes(@disk_total_space('.') - @disk_free_space('.')) : 'N/A',
      'Disk Usage %' => (function_exists('disk_total_space') && function_exists('disk_free_space') && @disk_total_space('.') > 0) ?
        round(((@disk_total_space('.') - @disk_free_space('.')) / @disk_total_space('.')) * 100, 1) . '%' : 'N/A',
    ]
  ],
  'environment' => [
    'icon' => '🌍',
    'title' => 'Environment & Server Variables',
    'data' => [
      'Default Charset' => ini_get('default_charset'),
      'Internal Encoding' => ini_get('internal_encoding') ?: 'N/A',
      'Max Input Vars' => ini_get('max_input_vars'),
      'Server Signature' => $_SERVER['SERVER_SIGNATURE'] ?? 'N/A',
      'Gateway Interface' => $_SERVER['GATEWAY_INTERFACE'] ?? 'N/A',
      'HTTP User Agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'N/A',
      'Accept Language' => $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? 'N/A',
      'Accept Encoding' => $_SERVER['HTTP_ACCEPT_ENCODING'] ?? 'N/A',
      'Server Admin' => $_SERVER['SERVER_ADMIN'] ?? 'N/A',
    ]
  ]
];

// Calculate total extensions count
$allExtensions = get_loaded_extensions();
$extensionCount = count($allExtensions);

// Determine disk bar color
$diskPercent = 0;
if (function_exists('disk_total_space') && function_exists('disk_free_space') && @disk_total_space('.') > 0) {
  $diskPercent = round(((@disk_total_space('.') - @disk_free_space('.')) / @disk_total_space('.')) * 100, 1);
}
$diskBarClass = $diskPercent > 90 ? 'danger' : ($diskPercent > 75 ? 'warning' : '');

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🚀 Advanced System Info</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #0d1117;
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      padding: 20px;
      color: #e6edf3;
      min-height: 100vh;
    }

    .container {
      max-width: 1300px;
      margin: 0 auto;
    }

    .header {
      background: #161b22;
      border-radius: 24px;
      padding: 30px 35px;
      margin-bottom: 30px;
      border: 1px solid #30363d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    .header h1 {
      font-size: 2.4rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 15px;
      letter-spacing: -0.5px;
    }

    .header h1 span {
      background: #238636;
      font-size: 1.2rem;
      padding: 4px 20px;
      border-radius: 40px;
      color: #0d1117;
      font-weight: 600;
    }

    .header-stats {
      display: flex;
      gap: 25px;
      flex-wrap: wrap;
      font-size: 0.95rem;
      color: #8b949e;
    }

    .header-stats strong {
      color: #f0f6fc;
    }

    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      background: #21262d;
    }

    .badge.success {
      background: #238636;
      color: #0d1117;
    }

    .badge.warning {
      background: #d29922;
      color: #0d1117;
    }

    .badge.danger {
      background: #da3633;
      color: white;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 24px;
      margin-bottom: 30px;
    }

    .card {
      background: #161b22;
      border-radius: 20px;
      border: 1px solid #30363d;
      overflow: hidden;
      transition: all 0.2s ease;
    }

    .card:hover {
      border-color: #58a6ff;
      box-shadow: 0 4px 20px rgba(88, 166, 255, 0.05);
    }

    .card-header {
      padding: 16px 22px;
      background: #0d1117;
      border-bottom: 1px solid #30363d;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .card-header .icon {
      font-size: 1.5rem;
    }

    .card-body {
      padding: 16px 22px 22px;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #21262d;
      gap: 15px;
      font-size: 0.92rem;
      align-items: baseline;
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-row .label {
      color: #8b949e;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
      min-width: 140px;
    }

    .info-row .value {
      color: #f0f6fc;
      word-break: break-word;
      text-align: right;
      font-weight: 500;
    }

    .info-row .value small {
      font-weight: 400;
      color: #8b949e;
      font-size: 0.8rem;
    }

    .disk-section {
      background: #161b22;
      border-radius: 20px;
      padding: 20px 25px;
      margin-bottom: 30px;
      border: 1px solid #30363d;
    }

    .disk-section .disk-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 12px;
      gap: 10px;
    }

    .disk-section .disk-title {
      font-size: 1.1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .disk-bar-container {
      background: #21262d;
      height: 12px;
      border-radius: 20px;
      overflow: hidden;
      margin: 10px 0 15px;
    }

    .disk-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #2ea043, #3fb950);
      border-radius: 20px;
      transition: width 0.4s ease;
    }

    .disk-bar-fill.warning {
      background: linear-gradient(90deg, #d29922, #e3b341);
    }

    .disk-bar-fill.danger {
      background: linear-gradient(90deg, #da3633, #f85149);
    }

    .disk-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 20px 30px;
      font-size: 0.95rem;
    }

    .disk-stats span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .extensions-section {
      background: #161b22;
      border-radius: 20px;
      padding: 20px 25px;
      border: 1px solid #30363d;
    }

    .extensions-section .ext-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .extensions-section .ext-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .extensions-section .ext-tag {
      background: #0d1117;
      border: 1px solid #30363d;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.8rem;
      color: #c9d1d9;
      transition: all 0.15s ease;
    }

    .extensions-section .ext-tag:hover {
      border-color: #58a6ff;
      background: #0f141c;
    }

    .footer {
      margin-top: 30px;
      padding: 18px 0;
      border-top: 1px solid #21262d;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 0.85rem;
      color: #484f58;
    }

    .footer span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    @media (max-width: 850px) {
      .grid {
        grid-template-columns: 1fr;
      }

      .header h1 {
        font-size: 1.8rem;
      }

      .header h1 span {
        font-size: 1rem;
        padding: 2px 14px;
      }

      .info-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }

      .info-row .value {
        text-align: left;
      }
    }
  </style>
</head>

<body>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1>
        🚀 System Dashboard
        <span>v2.1</span>
      </h1>
      <div class="header-stats">
        <span>🕒 <strong><?php echo date('Y-m-d H:i:s'); ?></strong></span>
        <span>🐘 PHP <strong><?php echo phpversion(); ?></strong></span>
        <span>📦 <strong><?php echo $extensionCount; ?></strong> extensions</span>
        <span class="badge <?php echo version_compare(phpversion(), '8.0', '>=') ? 'success' : 'warning'; ?>">
          <?php echo version_compare(phpversion(), '8.0', '>=') ? '✅ Modern' : '⚠️ Legacy'; ?>
        </span>
      </div>
    </div>

    <!-- Disk Usage -->
    <?php if (function_exists('disk_total_space') && function_exists('disk_free_space')):
      $total = @disk_total_space('.');
      $free = @disk_free_space('.');
      if ($total > 0) {
        $used = $total - $free;
        $percent = round(($used / $total) * 100, 1);
      } else {
        $used = 0;
        $percent = 0;
      }
    ?>
      <div class="disk-section">
        <div class="disk-header">
          <div class="disk-title">
            💾 Disk Storage
          </div>
          <div style="font-size: 0.9rem; color: #8b949e;">
            <?php echo $total > 0 ? formatBytes($used) . ' used · ' . formatBytes($free) . ' free of ' . formatBytes($total) : 'Disk information unavailable'; ?>
          </div>
        </div>
        <?php if ($total > 0): ?>
          <div class="disk-bar-container">
            <div class="disk-bar-fill <?php echo $percent > 90 ? 'danger' : ($percent > 75 ? 'warning' : ''); ?>"
              style="width: <?php echo min(100, max(0, $percent)); ?>%;">
            </div>
          </div>
          <div class="disk-stats">
            <span>📊 Used: <strong><?php echo $percent; ?>%</strong></span>
            <span>📦 Total: <?php echo formatBytes($total); ?></span>
            <span>📂 Used: <?php echo formatBytes($used); ?></span>
            <span>🗑️ Free: <?php echo formatBytes($free); ?></span>
            <span>🧠 PHP Memory: <?php echo function_exists('memory_get_usage') ? formatBytes(memory_get_usage()) : 'N/A'; ?></span>
            <span>⚡ Peak: <?php echo function_exists('memory_get_peak_usage') ? formatBytes(memory_get_peak_usage()) : 'N/A'; ?></span>
          </div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <!-- Info Grid -->
    <div class="grid">
      <?php foreach ($sysInfo as $section => $info): ?>
        <div class="card">
          <div class="card-header">
            <span class="icon"><?php echo $info['icon']; ?></span>
            <?php echo $info['title']; ?>
          </div>
          <div class="card-body">
            <?php foreach ($info['data'] as $label => $value): ?>
              <div class="info-row">
                <span class="label"><?php echo $label; ?></span>
                <span class="value"><?php echo htmlspecialchars($value); ?></span>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <!-- Extensions -->
    <div class="extensions-section">
      <div class="ext-header">
        <div style="font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 10px;">
          🧩 PHP Extensions
          <span style="font-size: 0.85rem; font-weight: 400; color: #8b949e;">(<?php echo $extensionCount; ?> total)</span>
        </div>
        <span style="font-size: 0.8rem; color: #8b949e;">🧪 loaded at runtime</span>
      </div>
      <div class="ext-list">
        <?php
        $extensions = get_loaded_extensions();
        sort($extensions);
        foreach ($extensions as $ext):
        ?>
          <span class="ext-tag"><?php echo htmlspecialchars($ext); ?></span>
        <?php endforeach; ?>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <span>🖥️ <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Server'; ?> · <?php echo PHP_OS; ?></span>
      <span>📅 <?php echo date('Y-m-d H:i:s'); ?> · <?php echo date_default_timezone_get(); ?></span>
      <span>🔗 <?php echo $_SERVER['HTTP_HOST'] ?? 'localhost'; ?></span>
    </div>
  </div>
</body>

</html>
