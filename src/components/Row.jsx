import React from 'react'
import PropTypes from 'prop-types';
import classes from './Row.module.css'

export const RowSizes = {
    lg: "lg",
    md: "md",
    sm: "sm"
}

export const RowSpeed = {
    faster: 30,
    fast: 60,
    normal: 90,
    slow: 120,
    slower: 150,
}

const Row = (props) => {

    const timer = React.useRef(null)

    const [data, setData] = React.useState(props.defaultData)
    const [blocks, setBlocks] = React.useState(Array(props.dotCount).fill(0))

    React.useEffect(() => {

        setData(props.defaultData)

    }, [props.defaultData])

    React.useEffect(() => {

        setBlocks(Array(props.dotCount).fill(0))

    }, [props.dotCount])

    React.useEffect(() => {

        timer.current = setInterval(() => {
            
            if(!props.stop) {

                setData((s) => {
                
                    const dat = s.split(",")
                    const d = dat.shift()
                    dat.push(d)
    
                    return dat.join(",")
                })

            }

        }, props.speed)

        return () => clearInterval(timer.current)

    }, [props.stop, props.speed])

    const sizeStyle = props.size === RowSizes.md ? classes.md : props.size === RowSizes.lg ? classes.lg : classes.sm

    return (
        <div className={classes.blockContainer}>
        {
            blocks.map((_, i) => {

                let d = data.split(",")[i]

                d = typeof d === "undefined" || d === "" ? 0 : parseInt(d)

                return (
                    <div key={i} className={[classes.block, sizeStyle].join(' ')} style={{
                        backgroundColor: d % 2 > 0 ? props.color : '#333'
                    }} />
                )
            })
        }
        </div>
        
    )
}

Row.defaultProps = {
    defaultData: "0,1,1,0,0,0,1,1,0",
    dotCount: 8,
    size: RowSizes.md,
    stop: false,
    color: '#ff3',
    speed: RowSpeed.normal,
}

Row.propTypes = {
    defaultData: PropTypes.string,
    dotCount: PropTypes.number,
    size: PropTypes.string,
    stop: PropTypes.bool,
    color: PropTypes.string,
    speed: PropTypes.number,
}

export default Row
