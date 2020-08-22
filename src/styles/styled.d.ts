import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            Sky: string,
            Building: string,
            Window: string,
            BuildingTrid: string,
        }
    }
}