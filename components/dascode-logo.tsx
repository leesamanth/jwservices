import React from 'react'
type IconProps = React.HTMLAttributes<SVGElement>
const DashCodeLogo = (props: IconProps) => {
    return (
        <>
            <svg {...props} xmlns="http://www.w3.org/2000/svg"  width="32" zoomAndPan="magnify" viewBox="0 0 32 32" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="3238dab642"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="3949c353b8"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><image x="0" y="0" width="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAAAmJLR0QA/4ePzL8AAAD1SURBVHic7c+BCcAgAMAw9XDBz31iYBnJBe08e/zCeh3wFSM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1FzFHAKPxgbeKwAAAABJRU5ErkJggg==" id="b8c639ba3b" height="32" preserveAspectRatio="xMidYMid meet"/><mask id="c8215a664f"><g filter="url(#3238dab642)"><g filter="url(#3949c353b8)" transform="matrix(0.75, 0, 0, 0.75, 0.00000125, 0.000002)"><image x="0" y="0" width="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAAAmJLR0QA/4ePzL8AAAD1SURBVHic7c+BCcAgAMAw9XDBz31iYBnJBe08e/zCeh3wFSM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1FzFHAKPxgbeKwAAAABJRU5ErkJggg==" height="32" preserveAspectRatio="xMidYMid meet"/></g></g></mask><image x="0" y="0" width="32" xlink:href="data:image/png;base64,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" id="081804400f" height="32" preserveAspectRatio="xMidYMid meet"/></defs><rect x="-15" width="32" fill="#ffffff" y="-15" height="31.999997" fill-opacity="1"/><rect x="-15" width="32" fill="#ffffff" y="-15" height="31.999997" fill-opacity="1"/><g mask="url(#c8215a664f)"><g transform="matrix(0.75, 0, 0, 0.75, 0.00000125, 0.000002)"><image x="0" y="0" width="32" xlink:href="data:image/png;base64,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" height="32" preserveAspectRatio="xMidYMid meet"/></g></g></svg>

        </>
    )
}

export default DashCodeLogo