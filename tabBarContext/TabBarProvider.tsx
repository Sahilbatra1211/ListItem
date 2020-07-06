import React, { useReducer } from 'react'
import { TabBar } from '../tabBar/components/TabBar'
import { UserProvider } from './TabBarContext'

interface TabBarProviderProps {
    children?: any
}

const initialState = {
    leftText: 'back',
    rightText: 'options',
    centerText: 'enter',
    leftCallback: () => { console.log('left softkey') },
    rightCallback: () => { console.log('right softkey') },
    centerCallback: () => { console.log('center softkey') }
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'changeLeftText':
            return { ...state, leftText: action.value }
        case 'changeRightText':
            return { ...state, rightText: action.value }
        case 'changeCenterText':
            return { ...state, centerText: action.value }
        case 'leftCallback':
            return { ...state, leftCallback: action.value }
        case 'rightCallback':
            return { ...state, rightCallback: action.value }
        case 'centerCallback':
            return { ...state, centerCallback: action.value }

    }
}

export const TabBarProvider: React.FC<TabBarProviderProps> = (props: TabBarProviderProps) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <UserProvider value={{ state: state, dispatch: dispatch }}>
                {children}
                <TabBar leftText={state.leftText}
                    rightText={state.rightText}
                    centerText={state.centerText}
                    leftCallback={state.leftCallback}
                    rightCallback={state.rightCallback}
                    centerCallback={state.centerCallback}>
                </TabBar>
            </UserProvider>
        </>
    )
}