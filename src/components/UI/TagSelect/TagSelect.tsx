import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './TagSelect.module.scss';
import CustomSelect from '@components/UI/CustomSelect';
import { useStore } from 'effector-react';
import { $tags, getTagsFx } from '@store/tags/tagsStore';
import { Input } from 'react-select/animated';
import { Form } from 'react-bootstrap';
import { Tag } from '@src/utils/api/types/main';
import cn from "classnames";


interface TagSelectProps {
  handleTagChange?: any
  theme?: 'light' | 'dark'
  role?: 'redactor' | 'viewer'
  initTags?: Tag[]
}


const TagSelect: FC<TagSelectProps> = ({ initTags, handleTagChange, theme = 'dark', role= 'viewer' }) => {
  const refInput = useRef(null);
  const chooseRef = useRef(null);
  console.log(initTags)
  const [tagName, setTagName] = useState('');
  const [chosenTags, setChosenTags] = useState<Tag[]>(initTags || []);
  const [excludedIdTags, setExcludedIdTags] = useState<number[]>(initTags?.map((tag) => tag.id) || []);
  const [isShowTags, setIsShowTags] = useState<boolean>(false);

  const deleteTag = (id: number) => {
    setChosenTags((prev) => prev.filter((tag) => tag.id !== id));
    setExcludedIdTags((prev) => prev.filter((excludedId) => excludedId !== id))
    if(handleTagChange){
      handleTagChange(chosenTags.filter((tag) => tag.id !== id))
    }
  };

  const handleTagName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTagName(e.target.value);
  };

  const tags = useStore($tags);

  const addTags = (id: number) => {
    if (refInput?.current) {
      console.dir(refInput.current);
      // @ts-ignore
      refInput.current?.blur();
      setIsShowTags(false);
    }
    if(handleTagChange){
      handleTagChange([...chosenTags, tags.find((tag) => tag.id === id)])
    }
    setTagName('');
    if (excludedIdTags.includes(id)) {
      return;
    }
    // @ts-ignore
    setChosenTags((prev) => [...prev, tags.find((tag) => tag.id === id)]);

    setExcludedIdTags((prev) => [...prev, id]);
  };

  const showTagsOnFocus = () => {
    getTagsFx(tagName).then();
    setIsShowTags(true);
  };

  useEffect(() => {
    getTagsFx(tagName).then();
  }, [tagName]);



  return (
    <div>
      <div className={styles.selectWrapper}>
        <Form.Control
          ref={refInput}
          value={tagName}
          onChange={handleTagName}
          className={styles.selectTagInput}
          placeholder={'Поиск'}
          onFocus={showTagsOnFocus}
          disabled={role === 'viewer'}
          // onBlur={hideTagsOnFocus}
        />
      </div>
      {isShowTags && (
        <>
          <div className={styles.positionFor} ref={chooseRef}>
            <div className={styles.searchedTags}>
              {tags
                .filter((tag) => !excludedIdTags.includes(tag.id))
                .map((tag) => (
                  <div className={styles.tagKeyword} key={tag.id} onClick={() => addTags(tag.id)}>
                    {tag.keyword}
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
      <div className={cn(styles.label, styles[theme])}>Перечислите интересующие вас навыки или выберите теги</div>
      <div className={styles.chosenTags}>
        {chosenTags.map((tag) => (
          <div
            className={styles.chosenTag}
            key={tag.id}
            style={{ background: `#${tag.color}` }}
            onClick={() => role === 'redactor' && deleteTag(tag.id)}
          >
            {tag.keyword}
          </div>
        ))}
      </div>
      <div className={styles.tags}></div>
    </div>
  );
};

export default TagSelect;
