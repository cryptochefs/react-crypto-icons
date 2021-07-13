export interface DynamicSVGImportOptions {
    onCompleted?: (
        name: string,
        SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined,
    ) => void;
    onError?: React.ReactEventHandler<SVGSVGElement>;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    height: number;
    width: number;
    onCompleted?: DynamicSVGImportOptions["onCompleted"];
    onError?: DynamicSVGImportOptions["onError"];
}
