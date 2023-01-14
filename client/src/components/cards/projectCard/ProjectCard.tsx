import { FC } from 'react';
import s from './ProjectCard.module.scss';

const ProjectCard: FC = () => {
  return (
    <div className={s.card_border}>
      <div className={s.card_space_btwn}>
        <div className={s.card}>
          <div className={s.card_info}>
            <p>Project: Drinking companion search service</p>
            <p>Crew members: 1/3</p>
            <p>Estimated development time: 1 week</p>
            <p>Description: Useful service for interested customers</p>
          </div>
          <hr className={s.card_sep} />
          <div className={s.card_members_list}>
            <div className={s.card_members_item_border}>
              <div className={s.card_members_item}>
                <div className={s.card_members_item_status}>
                  <div className={s.card_members_item_status_checked}></div>
                </div>
                <hr />
                <div className={s.card_members_item_text}>
                  UI/UX
                </div>
              </div>
            </div>
            <div className={s.card_members_item_border}>
              <div className={s.card_members_item}>
                <div className={s.card_members_item_status}>
                  <div className={s.card_members_item_status_plus}></div>
                </div>
                <hr />
                <div className={s.card_members_item_text}>
                  React
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
