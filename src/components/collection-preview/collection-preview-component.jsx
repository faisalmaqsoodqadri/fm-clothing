import React from 'react'
import CollectionItem from '../colleciton-item/collection-item.component.jsx';
import './collection-preview-component.styles.scss'


const CollectionPreview = ({ title, items }) => (

    <div className = 'collection-preview'>

        <h1 className='title'> { title.toUpperCase()} </h1>

        <div className='preview'>
            

            {
                
                items.filter((item, idx) => (idx < 4))
                    .map(({ id, ...othersItemProps }) => ( <CollectionItem key={id} {...othersItemProps} />
                    

                    ))}
            
        </div>
    </div>

)


export default CollectionPreview;


//.map(item => ( <div key = { item.id} > { item.name}</div>)) Just Print data