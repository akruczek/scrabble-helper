import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLOR } from '../../../core/colors/colors.constants'
import { TEXT_SIZE } from '../../../core/text/text.constants'

export const PossibleWordsContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-horizontal: 5px;
`

export const SearchingDatabaseContainer = styled.View`
  width: 100%;
  height: 300px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

export const WordsGroupContainer = styled.View`
  margin-bottom: 10px;
  margin-left: 5px;
`

export const WordsGroupHeadline = styled.Text`
  font-size: ${TEXT_SIZE.M}px;
  color: ${COLOR.BLACK};
  margin-bottom: 5px;
`

export const PossibleWordsLetterCardsContainer = styled.View`
  flex-direction: row;
`

export const NoResultsFoundIcon = styled(MaterialCommunityIcons).attrs({
  name: 'cancel',
  color: COLOR.SLATE_GREY,
  size: TEXT_SIZE.XXL * 2,
})``
