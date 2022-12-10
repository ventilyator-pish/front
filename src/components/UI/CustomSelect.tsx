import Select, {components} from 'react-select';
import styles from './CustomSelect.module.scss';
import React, {FC, useEffect} from 'react';
import SearchIcon from '@assets/icons/SearchIcon';

export const customStyles = (isFilter: boolean, isMulti: boolean, size: 'big' | 'small') => ({
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: '12px',
    border: state.menuIsOpen ? '2px solid #024A7E' : '1px solid #EDEDED',
    width: isMulti ? '456px' : 'auto',
    height: isMulti || size === 'small' ? 'auto' : '56px',
    padding: size === 'small' ? '8px 16px' : '15px 24px',
    boxShadow: 'none',
    columnGap: 8,
    background: '#EFF0F7',
    '&:hover': {
      border: state.menuIsOpen ? '2px solid #024A7E' : '1px solid #C4C4C4',
    },
    '&:active, &:focus': {
      border: '2px solid #024A7E',
      boxShadow: 'none',
    },
  }),
  multiValue: (provided: any) => ({
    ...provided,
    padding: '8px 16px',
    background: '#EFF0F7',
    border: '1px solid #EDEDED',
    borderRadius: '8px',

    '& > div:first-of-type': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '-0.03em',
      color: '#828282',
    },
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    padding: 0,
    margin: 0,
    display: 'flex',
    '& > input': {},
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
    color: '#4E4B66',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    margin: 0,
    fontWeight: isFilter ? 700 : 400,
  }),
  indicatorsContainer: (provided: any) => ({
    '& > div > svg': {
      fill: '#828282',
    },
    ...provided,
    width: 'auto',
    '& > div': {
      padding: 0,
    },
    display: isFilter ? 'none' : 'flex',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  group: (provided: any) => ({
    ...provided,
    padding: 0,
    '& + &': {
      borderTop: '1px solid #EDEDED;',
    },
  }),
  groupHeading: (provided: any) => ({
    ...provided,
    padding: '8px',
    margin: 0,
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
    textTransform: 'none',
    color: '#555555',
  }),
  menu: (provided: any) => ({
    ...provided,
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2), 0px 8px 24px rgba(0, 0, 0, 0.1);',
    overflow: 'hidden',
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
    border: 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: '8px',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
    color: '#555555',
    background: 'transparent',
    '&:hover': {
      background: '#e9ecef',
    },
  }),
});

interface IOptionSelect {
  value: string;
  label: string | React.ReactNode;
}

interface ICustomSelect {
  options: unknown[];
  isFilter?: boolean;
  placeholder?: string;
  isMulti?: boolean;
  size?: 'big' | 'small';
  className?: string;
  name?: string;
  defaultValue?: unknown;
  components?: any;
  value?: unknown;
  setValue?: any;
  onChange?: any;
  isSearchable?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
}

interface ICustomSingleValue {
  data: { label: string };
}

const customSingleValue: FC<ICustomSingleValue> = ({ data }) => (
  <div className={styles.customSingleValueWrapper}>
    <SearchIcon />
    <div className={styles.customSingleValue}>{data.label}</div>
  </div>
);

const Control = ({ children, ...props }: any) => {
  const {clearValue, getValue, hasValue, selectProps} = props

  useEffect(() => {
    console.log(getValue())
    clearValue()
      console.log(123)
  }, [])

  return (
      <components.Control {...props}>
        <>{children}</>
      </components.Control>
  );
};

const customPlaceholder: FC = () => (
  <div className={styles.customSingleValueWrapper}>
    <SearchIcon />
  </div>
);

const CustomSelect: FC<ICustomSelect> = ({
  options,
  isFilter = false,
  placeholder = '',
  isMulti = false,
  size = 'big',
  className,
  name,
  defaultValue,
  components,
  value,
  setValue,
  onChange,
  isSearchable = false,
  isClearable = false,
  isDisabled = false,
  autoFocus = false,
  // menuIsOpen = false,
}) => {
  return (
    <Select
      name={name}
      autoFocus={autoFocus}
      styles={customStyles(isFilter, isMulti, size)}
      options={options}
      isSearchable={isSearchable}
      isClearable={isClearable}
      defaultValue={defaultValue}
      placeholder={placeholder}
      // @ts-ignore
      components={Object.assign(
        { ...components },
        isFilter && { Control },
      )}
      isMulti={isMulti}
      className={className}
      value={value}
      // @ts-ignore
      setValue={setValue}
      onChange={onChange}
      closeMenuOnSelect={!isMulti}
      isDisabled={isDisabled}
    />
  );
};

export default CustomSelect;
