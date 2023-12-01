import React from 'react'
import CustomSelect from '../fields/CustomSelect'
import Loader from '../loader/Loader'
import { capitalizeFLetter } from '../../utils/func'
import { GrFormCheckmark } from 'react-icons/gr'

const CurrencyDropdown = ({
    isCurrencyLoading,
    options,
    onChangeCurrency,
    currency,
    currencyName,
}) => {
    return (
        <div className="roundedSelect">
            <CustomSelect
                value={capitalizeFLetter(currencyName)}
                width="100px"
                dropdownRender={(ReactNodevalue) => {
                    return (
                        <div>
                            {isCurrencyLoading ? (
                                <div>
                                    <Loader />
                                </div>
                            ) : (
                                <ul>
                                    {!!options?.length &&
                                        options.map((items, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    onChangeCurrency(
                                                        items?.symbol,
                                                        items?.name
                                                    )
                                                }
                                                className="cursor-pointer"
                                            >
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src={items?.iconUrl}
                                                            alt={`${items?.name} flag`}
                                                            className="w-[15px] h-[15px]"
                                                        />
                                                        <p>
                                                            {capitalizeFLetter(
                                                                items?.name
                                                            )}
                                                        </p>
                                                    </div>
                                                    <p>
                                                        {currency ===
                                                        items?.symbol ? (
                                                            <GrFormCheckmark color="#E25A5A" />
                                                        ) : null}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default CurrencyDropdown
