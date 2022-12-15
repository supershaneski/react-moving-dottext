import React from 'react'
import PropTypes from 'prop-types';
//import classes from './DotText.module.css'
import Row, { RowSizes, RowSpeed } from './Row'
import { getCharacterList } from '../lib/characterList'
import { splitArray } from '../lib/utils'

const DotText = (props) => {

    const [arrays, setArrays] = React.useState([])

    React.useEffect(() => {

        const characterList = getCharacterList()

        const text = props.text.toUpperCase()

        let updatedText = text.replace(/[^a-zA-Z0-9 ]/g, '');

        let arr1 = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
        let arr5 = []
        let arr6 = []
        let arr7 = []

        const spaceCount = props.length / 4

        for(let i = 0; i < spaceCount - 3; i++) {
            updatedText = " " + updatedText
        }

        updatedText += " "

        for(let i = 0; i < updatedText.length; i++) {
            
            const charCode = updatedText.charCodeAt(i)
            const charArray = characterList[charCode]

            const arrs = splitArray(charArray, 7)

            if(i > 0) {
                arr1.push(0)
                arr2.push(0)
                arr3.push(0)
                arr4.push(0)
                arr5.push(0)
                arr6.push(0)
                arr7.push(0)
            }

            arr1 = arr1.concat(arrs[0])
            arr2 = arr2.concat(arrs[1])
            arr3 = arr3.concat(arrs[2])
            arr4 = arr4.concat(arrs[3])
            arr5 = arr5.concat(arrs[4])
            arr6 = arr6.concat(arrs[5])
            arr7 = arr7.concat(arrs[6])

        }

        setArrays([
            arr1,
            arr2,
            arr3,
            arr4,
            arr5,
            arr6,
            arr7
        ])

    }, [props.text, props.length])

    return (
        <div>
            {
                arrays.length > 0 &&
                <React.Fragment>
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[0].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[1].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[2].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[3].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[4].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[5].join(",")} />
                    <Row stop={!props.play} speed={props.speed} color={props.color} size={props.size} dotCount={props.length} defaultData={arrays[6].join(",")} />
                </React.Fragment>
            }
        </div>
    )
}

DotText.defaultProps = {
    text: "Lorem ipsum dolor sit amet",
    size: RowSizes.md,
    length: 36,
    play: false,
    color: '#ff3',
    speed: RowSpeed.normal,
}

DotText.propTypes = {
    play: PropTypes.bool,
    size: PropTypes.string,
    length: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string,
    speed: PropTypes.number,
}

export default DotText