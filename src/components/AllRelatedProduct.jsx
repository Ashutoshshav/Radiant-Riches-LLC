import React from 'react';
import RelatedProduct from './RelatedProduct';

export default function AllRelatedProduct() {
        return (
                <div>
                        <h2 className='text-3xl'>Related deals you might like for</h2>

                        <div className="flex">
                                <RelatedProduct discount="20%Off" title="Computer  Modern clasic with wix support" price="$39.96" maxPrice="$49.96" />

                                <RelatedProduct discount="20%Off" title="Computer  Modern clasic with wix support" price="$39.96" maxPrice="$49.96" />

                                <RelatedProduct discount="20%Off" title="Computer  Modern clasic with wix support" price="$39.96" maxPrice="$49.96" />
                        </div>
                </div>
        )
}
