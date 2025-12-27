import { Suspense } from 'react';
import { listData } from '../../lib/dummydata';
import Card from '../card/Card';
import './list.scss';
import { Await, useLoaderData } from 'react-router-dom';

function List() {
    const data = useLoaderData();
    console.log(data);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
                >
                <div className='list'>
                    {listData.map(item => (
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </Await>
        </Suspense>
    );
};

export default List;