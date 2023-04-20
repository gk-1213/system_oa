import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Button} from 'antd';
import hl from '../../../../../../static/document/hl.pdf'
import './PDF.css'


function PDF() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    //点击上一页
    function handlePrevious() {
        setPageNumber(pageNumber - 1)
    }
    //点击下一页
    function handleNext() {
        setPageNumber(pageNumber + 1)
    }

    return (
        <div>
            <div className="filePdf">
                <Document file={hl} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>

            <div className="filePdfFooter">
                {pageNumber === 1 ?
                    null
                    :
                    <Button type='primary' onClick={handlePrevious}>上一页</Button>
                }

                <div className="filePdfPage">

                    <span>第{pageNumber}页</span>/<span>共{numPages}页</span>

                </div>
                {pageNumber === numPages ?
                    null
                    :
                    <Button style={{ marginLeft: '10px' }} type='primary' onClick={handleNext}>下一页</Button>
                }
            </div>
        </div>
    );
}
export default PDF