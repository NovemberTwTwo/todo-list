interface BoxSizing {
  $width?: string;
  $height?: string;
  $minWidth?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $maxHeight?: string;
}

interface BoxSpacing {
  $margin?: string;
  $padding?: string;
}

interface FontSizing {
  $fontSize?: number;
  $lineHeight?: number;
  $fontWeight?: number;
}

interface IconColor {
  $fill?: string;
  $stroke?: string;
}

export type { BoxSizing, BoxSpacing, FontSizing, IconColor };
