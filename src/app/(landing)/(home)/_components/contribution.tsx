import {ReactNode} from 'react'
import {AiFillHeart, AiOutlineStar} from 'react-icons/ai'

import {
  Card,
  CardTitle,
  CardTooltip,
} from '@/app/(landing)/(home)/_components/card'
import {Button} from '@/app/_components/button'
import {
  FiThumbsUp,
  IconProvider,
  LiaAwardSolid,
  LiaHandHoldingHeartSolid,
} from '@/app/_components/icons'
import {cn} from '@/app/_lib/cn'

export const Contribution = () => (
  <Card
    rootClassName={cn(['p-5'])}
    header={
      <div className={cn(['mb-4'])}>
        <CardTooltip
          icon={
            <IconProvider value={{size: '.8rem'}}>
              <div className={cn(['bg-red-600 rounded-full p-2.5'])}>
                <AiFillHeart />
              </div>
            </IconProvider>
          }
        >
          Featured
        </CardTooltip>
        <CardTitle color="bg-gradient-to-r from-[#FFE853] to-[#FF343F]">
          Support Unique Ideas
        </CardTitle>
      </div>
    }
    body={
      <div className={cn(['mb-10'])}>
        <div className={cn(['mb-10'])}>
          <ul className={cn(['font-extrabold flex flex-col gap-2.5 mb-2.5'])}>
            <VoteItem
              icon={
                <IconProvider value={{color: '#FFE753', size: '1.4rem'}}>
                  <LiaAwardSolid />
                </IconProvider>
              }
            >
              Add More Profile Settings
            </VoteItem>
            <VoteItem
              icon={
                <IconProvider value={{size: '1.4rem'}}>
                  <LiaAwardSolid />
                </IconProvider>
              }
            >
              Add Dark Theme and More Accessibility
            </VoteItem>
            <VoteItem
              icon={
                <IconProvider value={{color: '#FF7B47', size: '1.4rem'}}>
                  <LiaAwardSolid />
                </IconProvider>
              }
            >
              Add Animated Emojis in Chat
            </VoteItem>
          </ul>
          <div className={cn(['text-right text-sm'])}>
            <span className={cn(['underline'])}>See all features</span>
          </div>
        </div>
        <div className={cn(['mb-2'])}>
          <div className={cn(['mb-2.5'])}>
            <ProgressLine />
          </div>
          <div className={cn(['flex sm:flex-row flex-col justify-between'])}>
            <GoalItem
              title="$500k+"
              description={'Raised'}
            />
            <GoalItem
              title="20k+"
              description={'Sponsors'}
            />
            <GoalItem
              title="50+"
              description={'Inspiration'}
            />
            <GoalItem
              title="$100k+"
              description={
                <span className={cn(['block text-right'])}>Goal</span>
              }
            />
          </div>
        </div>
      </div>
    }
    footer={
      <div
        className={cn([
          'flex sm:flex-row flex-col justify-center gap-2.5',
          'pb-4',
        ])}
      >
        <Button
          icon={
            <IconProvider value={{size: '1.4rem'}}>
              <AiOutlineStar />
            </IconProvider>
          }
        >
          Suggest Feature
        </Button>
        <Button
          type="outline"
          icon={
            <IconProvider value={{size: '1.4rem'}}>
              <LiaHandHoldingHeartSolid />
            </IconProvider>
          }
        >
          Support Ideas
        </Button>
      </div>
    }
  />
)

const VoteItem = ({children, icon}: {children: ReactNode; icon: ReactNode}) => (
  <li
    className={cn([
      'flex justify-between items-center',
      'text-sm',
      'rounded-full bg-white/5 px-[1.5rem] py-[0.8rem]',
    ])}
  >
    <div className={cn(['flex items-center gap-[0.6rem]'])}>
      <span>{icon}</span>
      {children}
    </div>
    <span>
      <IconProvider value={{size: '1.2rem'}}>
        <FiThumbsUp />
      </IconProvider>
    </span>
  </li>
)

const GoalItem = ({
  title,
  description,
}: {
  title: ReactNode
  description: ReactNode
}) => (
  <div className={cn(['flex flex-col'])}>
    <span className={cn(['font-extrabold text-xl'])}>{title}</span>
    <span className={cn(['text-sm'])}>{description}</span>
  </div>
)

const ProgressLine = () => (
  <div
    className={cn([
      'h-[0.3rem] rounded-xl',
      'bg-gradient-to-r',
      'from-indigo-500 from-0%',
      'via-pink-500 via-20%',
      'via-rose-600 via-50%',
      'via-white via-60%',
      'to-white to-100%',
    ])}
  />
)
