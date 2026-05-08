import s from './UserPick.module.scss';
import ArrowIcon from '../../assets/icons/arrow-down.svg?react';

export const UserPick = () => {
  return (
    <div className={s.userPick}>
      {/* Первый элемент: Группа Аватар + Имя */}
      <div className={s.info}>
        <div className={s.avatar}>
          <span>AL</span>
        </div>
        <span className={s.name}>Artem Lapitsky</span>
      </div>

      {/* Второй элемент: Стрелочка */}
      <ArrowIcon className={s.arrow} />
    </div>
  );
};