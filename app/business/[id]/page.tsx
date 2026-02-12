import React, { useState, use } from 'react';
import {BusinessDetail} from '@/components/bussines-detail';

export default function BusinessDetailPage({ params }: { params: Promise<{ id: string }> }) {

  return (
    <BusinessDetail params={params} />
  );
}
