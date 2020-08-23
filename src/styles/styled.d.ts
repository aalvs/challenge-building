import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            Sky: string,
            Building: string,
            WindowOn: string,
            WindowOff: string,
            BuildingTrid: string,
            Sun: string,
            Moon: string,
        }
    }
}