import * as StyledSystem from "styled-system";
import * as React from "react";
declare type CSS = React.CSSProperties;
declare type borderRadius = StyledSystem.BorderRadiusProps["borderRadius"];
declare type borderColor = StyledSystem.BorderColorProps["borderColor"];
interface ICustomConfig {
    rounded?: borderRadius;
    roundedTop?: borderRadius;
    roundedBottom?: borderRadius;
    roundedLeft?: borderRadius;
    roundedRight?: borderRadius;
    roundedTopRight?: borderRadius;
    roundedTopLeft?: borderRadius;
    roundedBottomRight?: borderRadius;
    roundedBottomLeft?: borderRadius;
    borderBottomColor?: borderColor;
    borderTopColor?: borderColor;
    borderRightColor?: borderColor;
    borderLeftColor?: borderColor;
    w?: StyledSystem.WidthProps["width"];
    minW?: StyledSystem.MinWidthProps["minWidth"];
    maxW?: StyledSystem.MaxWidthProps["maxWidth"];
    h?: StyledSystem.HeightProps["height"];
    minH?: StyledSystem.MinHeightProps["minHeight"];
    maxH?: StyledSystem.MaxHeightProps["maxHeight"];
    d?: StyledSystem.DisplayProps["display"];
    backgroundAttachment?: StyledSystem.ResponsiveValue<CSS["backgroundAttachment"]>;
    bgImg?: StyledSystem.BackgroundImageProps["backgroundImage"];
    bgImage?: StyledSystem.BackgroundImageProps["backgroundImage"];
    bgSize?: StyledSystem.BackgroundSizeProps["backgroundSize"];
    bgPos?: StyledSystem.BackgroundPositionProps["backgroundPosition"];
    pos?: StyledSystem.PositionProps["position"];
    flexDir?: StyledSystem.FlexDirectionProps["flexDirection"];
    textDecoration?: StyledSystem.ResponsiveValue<CSS["textDecoration"]>;
    textDecor?: StyledSystem.ResponsiveValue<CSS["textDecoration"]>;
    textTransform?: StyledSystem.ResponsiveValue<CSS["textTransform"]>;
    overflowX?: StyledSystem.OverflowProps["overflow"];
    overflowY?: StyledSystem.OverflowProps["overflow"];
    appearance?: StyledSystem.ResponsiveValue<CSS["appearance"]>;
    transform?: StyledSystem.ResponsiveValue<CSS["transform"]>;
    transformOrigin?: StyledSystem.ResponsiveValue<CSS["transformOrigin"]>;
    animation?: StyledSystem.ResponsiveValue<CSS["animation"]>;
    userSelect?: StyledSystem.ResponsiveValue<CSS["userSelect"]>;
    pointerEvents?: StyledSystem.ResponsiveValue<CSS["pointerEvents"]>;
    boxSizing?: StyledSystem.ResponsiveValue<CSS["boxSizing"]>;
    cursor?: StyledSystem.ResponsiveValue<CSS["cursor"]>;
    resize?: StyledSystem.ResponsiveValue<CSS["resize"]>;
    transition?: StyledSystem.ResponsiveValue<CSS["transition"]>;
    objectFit?: StyledSystem.ResponsiveValue<CSS["objectFit"]>;
    objectPosition?: StyledSystem.ResponsiveValue<CSS["objectPosition"]>;
    visibility?: StyledSystem.ResponsiveValue<CSS["visibility"]>;
    wordBreak?: StyledSystem.ResponsiveValue<CSS["wordBreak"]>;
    overflowWrap?: StyledSystem.ResponsiveValue<CSS["overflowWrap"]>;
    whiteSpace?: StyledSystem.ResponsiveValue<CSS["whiteSpace"]>;
    fill?: StyledSystem.ColorProps["color"];
    stroke?: StyledSystem.ColorProps["color"];
    bgAttachment?: StyledSystem.ResponsiveValue<CSS["backgroundAttachment"]>;
    shadow?: StyledSystem.BoxShadowProps["boxShadow"];
    listStyleType?: StyledSystem.ResponsiveValue<CSS["listStyleType"]>;
    listStylePosition?: StyledSystem.ResponsiveValue<CSS["listStylePosition"]>;
    listStyleImage?: StyledSystem.ResponsiveValue<CSS["listStyleImage"]>;
    listStyleImg?: StyledSystem.ResponsiveValue<CSS["listStyleImage"]>;
    listStylePos?: StyledSystem.ResponsiveValue<CSS["listStylePosition"]>;
    outline?: StyledSystem.ResponsiveValue<CSS["outline"]>;
    float?: StyledSystem.ResponsiveValue<CSS["float"]>;
    willChange?: StyledSystem.ResponsiveValue<CSS["willChange"]>;
    borderTopWidth?: StyledSystem.ResponsiveValue<CSS["borderTopWidth"]>;
    borderBottomWidth?: StyledSystem.ResponsiveValue<CSS["borderBottomWidth"]>;
    borderLeftWidth?: StyledSystem.ResponsiveValue<CSS["borderLeftWidth"]>;
    borderRightWidth?: StyledSystem.ResponsiveValue<CSS["borderRightWidth"]>;
}
declare type FontSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
interface IFontSize {
    fontSize?: StyledSystem.ResponsiveValue<FontSize> | StyledSystem.FontSizeProps["fontSize"];
}
declare type FontWeight = "hairline" | "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
interface IFontWeight {
    fontWeight?: StyledSystem.ResponsiveValue<FontWeight> | StyledSystem.FontWeightProps["fontWeight"];
}
declare type LineHeight = "none" | "shorter" | "short" | "normal" | "tall" | "taller";
interface ILineHeight {
    lineHeight?: StyledSystem.ResponsiveValue<LineHeight> | StyledSystem.LineHeightProps["lineHeight"];
}
declare type LetterSpacing = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
interface ILetterSpacing {
    letterSpacing?: StyledSystem.ResponsiveValue<LetterSpacing> | StyledSystem.LetterSpacingProps["letterSpacing"];
}
interface As {
    as?: React.ElementType;
}
declare type TypographyProps = Omit<StyledSystem.TypographyProps, "fontWeight" | "lineHeight" | "fontSize" | "letterSpacing">;
interface Truncated {
    /**
     * If `true`, the text will be truncated
     */
    isTruncated?: boolean;
}
declare type StyledSystemProps = StyledSystem.LayoutProps & StyledSystem.ColorProps & StyledSystem.SpaceProps & StyledSystem.BordersProps & StyledSystem.BackgroundProps & StyledSystem.PositionProps & StyledSystem.FlexboxProps & StyledSystem.ShadowProps & StyledSystem.GridProps & StyledSystem.OpacityProps & StyledSystem.OverflowProps;
declare type ModifiedStyledSystemProps = TypographyProps & IFontSize & ILetterSpacing & IFontWeight & ILineHeight & ICustomConfig;
declare type BoxHTMLProps = React.RefAttributes<any> & React.HTMLAttributes<any>;
export declare type BoxProps = BoxHTMLProps & StyledSystemProps & ModifiedStyledSystemProps & As & Truncated;
export {};
