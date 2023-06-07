import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	text: string;
}

const ExpandableText = ({ text }: Props) => {
	const [expanded, setExpanded] = useState(false);
    const limit = 300;
    
    if (!text) return null;

	if (text.length <= limit) return <Text>{text}</Text>;

	const summary = expanded ? text : text.substring(0, limit) + '... ';

	return (
		<Text>
			{summary}
			<Button
				onClick={() => setExpanded(!expanded)}
                size='xs'
                ml={1}
				fontWeight='bold'
				colorScheme='yellow'>
				{expanded ? 'Show less' : 'Read more'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
