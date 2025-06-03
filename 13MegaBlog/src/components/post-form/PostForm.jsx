import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import databaseService from '../../appwrite/databaseService';
import storageService from '../../appwrite/storageService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } =
        useForm({
            defaultValues: {
                title: post?.title || '',
                slug: post?.slug || '',
                content: post?.content || '',
                featuredImage: post?.featuredImage || '',
                status: post?.status || 'active',
            },
        });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0]
                ? storageService.uploadFile(data.image[0])
                : null;

            if (file) {
                storageService.deleteFile(post.featuredImage);
            }
        }
    };

    return (
        <div>
            <div>lkajd</div>
        </div>
    );
}

export default PostForm;
