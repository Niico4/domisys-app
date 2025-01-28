import React, { FC } from 'react';
import { Icon } from '@tabler/icons-react';
import { Card, CardBody } from '@heroui/react';

interface Props {
  title: string;
  description: string;
  icon?: Icon;
  colorIcon?: string;
  bgColor?: string;
}

const CardShadow: FC<Props> = ({
  title,
  description,
  colorIcon,
  bgColor = 'bg-black/5',
  icon: Icon,
}) => {
  return (
    <Card
      className={`justify-center ${bgColor} p-4 border border-gray-400/30`}
      style={{ boxShadow: '0px 0px 8px 3px rgba(182, 182, 182, 0.2)' }}
    >
      <CardBody className="flex flex-col items-start gap-3">
        <div className="flex flex-col gap-4">
          {Icon && (
            <div
              className={`flex-center size-12 rounded-lg`}
              style={{
                backgroundColor: colorIcon,
                boxShadow: `0px 0px 12px 2px ${colorIcon}`,
              }}
            >
              <Icon stroke={1} color="white" size={32} />
            </div>
          )}
          <h3 className="text-gray-300 text-3xl font-medium">{title}</h3>
        </div>

        <p className="text-gray-400 text-sm leading-6">{description}</p>
      </CardBody>
    </Card>
  );
};

export default CardShadow;
