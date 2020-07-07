import React, { useEffect, useState } from 'react';
import { TabBarProvider } from '../componentLibrary/tabBarContext/TabBarProvider';
import { getPreferredTopics } from './mockFunctions/mockFunctions'
import { AddTopics } from './AddTopics/AddTopics'
import { NewsFeed } from './NewsFeed/NewsFeed'
import { InitialScreen } from './InitialScreen/InitialScreen'

interface TopicObj {
    TopicId?: string,
    TopicTitle?: string,
    TopicImage?: string,
    TopicFavStatus?: number
}



export const NewsModule: React.FC = () => {
    const [preferredTopics, setPrefferredTopics] = useState<TopicObj[]>([]);
    const [topics, setTopics] = useState<TopicObj[]>([]);


    useEffect(() => {
        const prefTopics: TopicObj[] = getPreferredTopics();
        setPrefferredTopics([...prefTopics]);
        const allTopics: TopicObj[] = getPreferredTopics();
        setTopics([...allTopics]);
    }, [])

    const getScreen = () => {
        if (preferredTopics === [] && topics === []) {
            return <InitialScreen />
        }
        else if (preferredTopics === []) {
            //@ts-ignore
            return <AddTopics preferredTopics={preferredTopics} topics={topics} />
        }
        else {
            //@ts-ignore
            return <NewsFeed preferredTopics={preferredTopics} />
        }
    }

    return (
        <>
            <TabBarProvider>

                {getScreen()}

            </TabBarProvider>
        </>
    )
};

NewsModule.defaultProps = {
    name: 'News Module',
};
