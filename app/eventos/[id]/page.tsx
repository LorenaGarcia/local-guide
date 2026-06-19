import React from 'react';
import EventDetail from '@/components/event-detail/event-detail';

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <EventDetail params={params} />
  );
}
