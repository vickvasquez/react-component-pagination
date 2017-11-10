import React from 'react'
import PropTypes from 'prop-types'
import styles from '../public/css/index.css'

const Pagination = ({
    pages,
    page,
    onClick,
    numberPages,
}) => {
    let counter = 0
    let initialPage = 0

    if (pages === 0 || pages <= 0) {
        return ''
    }

    if ((page - numberPages) < 0) {
        initialPage = 1
    } else if (page + numberPages >= pages) {
        initialPage = pages - (numberPages - 1)
    } else {
        initialPage = page - 5
    }

    return (
        <ul className={styles.pagination}>

            <button
                className={styles.itemPagination}
                disabled={page === 1}
                onClick={() => onClick(1)}
            >
                {'<'}
            </button>

            <button
                className={styles.itemPagination}
                disabled={page === 1}
                onClick={() => onClick(page - 1)}
            >
                {'<<'}
            </button>

            {
                [ ...Array(numberPages) ]
                    .map(() => {
                        const className = (page === initialPage)
                            ? styles.pageCurrent
                            : styles.itemPagination

                        initialPage += 1
                        counter += 1

                        return (
                            <button
                                key={counter}
                                className={className}
                                onClick={e => onClick(e.target.innerHTML)}
                            >
                                { initialPage - 1 }
                            </button>
                        )
                    })
            }

            <button
                className={styles.itemPagination}
                disabled={page === pages}
                onClick={() => onClick(page + 1)}
            >
                {'>>'}
            </button>

            <button
                className={styles.itemPagination}
                disabled={page === pages}
                onClick={() => onClick(pages)}
            >
                {'>'}
            </button>

        </ul>
    )
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    numberPages: PropTypes.number,
}

Pagination.defaultProps = {
    numberPages: 10,
}

export default Pagination
