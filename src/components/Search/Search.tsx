import s from './Search.module.scss'
import FilterIcon from '../../assets/icons/filter.svg?react'

export const Search = () => {
  return (
    <div className={s.searchWrapper}>
      <input 
        type="text" 
        placeholder="Search" 
        className={s.input} 
      />
      <button className={s.filterBtn}>
        <FilterIcon />
      </button>
    </div>
  )
}