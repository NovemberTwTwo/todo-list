interface BoxSizing {
  $width?: string;
  $height?: string;
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

export type { BoxSizing, BoxSpacing, FontSizing };
