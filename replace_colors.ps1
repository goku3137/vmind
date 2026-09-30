$files = @(
    "c:\CODE\FL\vmind\src\app\course\marriagecouncil\page.tsx",
    "c:\CODE\FL\vmind\src\components\Footer.tsx"
)

$replacements = @{
    "#46204F" = "#0B7A75"
    "#C13B72" = "#19A67A"
    "#9E2C5C" = "#148C66"
    "#C9A24B" = "#FDB813"
    "#DDBE72" = "#FFCA45"
    "#FDFAF7" = "#F5F9F8"
    "#F3E7EF" = "#E7F3F1"
    "#301539" = "#064D4A"
    "#54405C" = "#2C4745"
    "#5F4968" = "#33524F"
    "#2B1631" = "#153331"
    "#E9D3DE" = "#D1EBE7"
    "#D9B9CB" = "#A3D7D1"
    "#F0E2E9" = "#E0EFEB"
    "#EAD9AE" = "#FCE4A6"
    "#D9BFCE" = "#A6CECA"
    "#F6ECF2" = "#E7F5F3"
    "#5B4763" = "#3A5452"
    "#F7ECF1" = "#E9F6F4"
    "#FBF4E6" = "#F0F9F7"
    "#8A748F" = "#598582"
    "#B7A2BE" = "#7FAAA6"
    "#9A7A2E" = "#8C660B"
    "#E4CDDA" = "#C5E0DE"
    "#3B2A10" = "#4A3606"
    "#A08BA8" = "#789B98"
    "#7A6280" = "#547A77"
    "#F7E9EF" = "#E6F5F2"
    "#F0D7E2" = "#CBE9E5"
    "#231127" = "#053B38"  # Dark teal for footer background
}

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($key in $replacements.Keys) {
            $content = $content -replace $key, $replacements[$key]
        }
        Set-Content -Path $file -Value $content
        Write-Host "Updated colors in $file"
    } else {
        Write-Host "File not found: $file"
    }
}
